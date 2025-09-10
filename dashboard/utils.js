
async function fetchText(path){ const r = await fetch(path); return r.text(); }
async function fetchJSON(path){ const r = await fetch(path); return r.json(); }

function csvToObjects(csv){
  const [head, ...lines] = csv.trim().split(/\r?\n/);
  const cols = head.split(',');
  return lines.map(line=>{
    const cells = []; let cur = ''; let inQ=false;
    for (let i=0;i<line.length;i++){
      const ch=line[i];
      if(ch==='"'){ inQ=!inQ; continue; }
      if(ch===',' && !inQ){ cells.push(cur); cur=''; continue; }
      cur+=ch;
    }
    cells.push(cur);
    const obj={};
    cols.forEach((c,idx)=>obj[c]=cells[idx]);
    return obj;
  });
}

function groupBy(arr, key){ return arr.reduce((m,x)=>((m[x[key]]=(m[x[key]]||[])).push(x),m),{}); }
function formatNumber(n){ return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,','); }
