
let selectedFile=null;

const drop=document.getElementById('drop');
const input=document.getElementById('fileInput');

drop.onclick=()=>input.click();

input.onchange=e=>handleFile(e.target.files[0]);

drop.addEventListener('dragover',e=>{
e.preventDefault();drop.classList.add('drag');
});
drop.addEventListener('dragleave',()=>drop.classList.remove('drag'));
drop.addEventListener('drop',e=>{
e.preventDefault();
drop.classList.remove('drag');
handleFile(e.dataTransfer.files[0]);
});

function handleFile(file){
if(!file) return;
selectedFile=file;
document.getElementById('fileBox').style.display='block';
document.getElementById('fileBox').innerHTML='📄 '+file.name+' ('+(file.size/1024).toFixed(1)+' KB)';
document.getElementById('analyzeBtn').disabled=false;
}

async function extractText(file){
if(file.name.toLowerCase().endsWith('.pdf')){
const pdf=await pdfjsLib.getDocument(URL.createObjectURL(file)).promise;
let txt='';
for(let i=1;i<=pdf.numPages;i++){
const page=await pdf.getPage(i);
const content=await page.getTextContent();
txt+=content.items.map(x=>x.str).join(' ')+' ';
}
return txt;
}else{
const result=await mammoth.extractRawText({arrayBuffer:await file.arrayBuffer()});
return result.value;
}
}

async function analyzeResume(){
if(!selectedFile)return;

let text=(await extractText(selectedFile)).toLowerCase();

let raw=0,max=110;
let analysis='';
let suggestions=[];
let missing=0;

function check(ok,title,pts,good,bad){
if(ok){
raw+=pts;
analysis+=`<div class="good">✅ <b>${title}</b> <span style="float:right">${pts} pts</span><br>${good}</div>`;
}else{
missing++;
analysis+=`<div class="bad">❌ <b>${title}</b> <span style="float:right">0/${pts}</span><br>${bad}</div>`;
suggestions.push(bad);
}
}

check(/\S+@\S+\.\S+/.test(text),"Contact Information",10,"Email and phone number detected","Add email and phone number");
check(
    !/[^\w\s.,@()%\-:/]/.test(text),
    "Formatting",
    10,
    "No problematic special characters detected",
    "Remove excessive symbols, icons, and decorative characters"
);
let headers = [];

if(/experience/.test(text)) headers.push("experience");
if(/education/.test(text)) headers.push("education");
if(/skills/.test(text)) headers.push("skills");
if(/summary/.test(text)) headers.push("summary");
if(/project/.test(text)) headers.push("projects");
if(/certification/.test(text)) headers.push("certifications");

check(
    headers.length >= 4,
    "Section Headers",
    15,
    `Found standard sections: ${headers.join(", ")}`,
    "Add standard sections such as Education, Experience, Skills, and Projects"
);
let words = text.split(/\s+/).length;

check(
    words >= 450 && words <= 900,
    "Content Length",
    10,
    `Good content length (${words} words)`,
    "Maintain resume length between 450 and 900 words"
);
check(
    /\b(19|20)\d{2}\b/.test(text),
    "Dates",
    10,
    "Employment/education dates found",
    "Include dates for education, projects, and experience"
);
check(
    /linkedin/.test(text) || /github/.test(text),
    "Online Presence",
    10,
    `LinkedIn: ${/linkedin/.test(text) ? "Found" : "Missing"} | GitHub: ${/github/.test(text) ? "Found" : "Missing"}`,
    "Add LinkedIn and GitHub profiles"
);
check(/developed|designed|implemented|optimized|engineered|analyzed/.test(text),"Action Verbs",10,"Strong action verbs found: implemented, designed, achieved","Use stronger action verbs");
check(/\d+%|improved|reduced|increased/.test(text),"Quantifiable Results",15,"Metrics and numbers found - great for ATS!","Add measurable achievements");
check(text.split(/\s+/).length>350,"Resume Length",10,"Appropriate length for ATS parsing","Increase content to 400-800 words");
check(!/table|textbox|header|footer|column/i.test(text),"Structure",10,"Simple structure - ATS friendly","Use a simple single-column layout and avoid tables, headers, footers, and text boxes");

let ats=Math.min(100,Math.round((raw/max)*100));
let potential=Math.min(100,ats+missing*4);

let grade='D';
if(ats>=95)grade='A+';
else if(ats>=90)grade='A';
else if(ats>=80)grade='B+';
else if(ats>=70)grade='B';
else if(ats>=60)grade='C';

document.getElementById('results').classList.remove('hidden');
document.getElementById('score').innerText=ats+'/100';
document.getElementById('grade').innerText='Grade: '+grade;
document.getElementById('summary').innerText='Raw Score: '+raw+'/'+max;
document.getElementById('analysis').innerHTML=analysis;
document.getElementById('suggestions').innerHTML=suggestions.map(x=>'<li>'+x+'</li>').join('');
document.getElementById('potential').innerText='Potential ATS Score: '+potential+'/100';

document.getElementById('recruiter').innerHTML=`
<b>Strengths:</b> ATS Score ${ats}/100<br><br>
<b>Areas to Improve:</b><br>${suggestions.slice(0,5).join('<br>') || 'None'}
`;
}

