const h=require("http"),f=require("fs"),p=require("path");
const m={".html":"text/html;charset=utf-8",".js":"application/javascript;charset=utf-8",".css":"text/css;charset=utf-8",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"};
h.createServer((q,s)=>{
  let fp=p.join(process.cwd(),q.url==="/"?"/index.html":q.url);
  if(!f.existsSync(fp)){s.writeHead(404);s.end("NF");return}
  s.writeHead(200,{"Content-Type":m[p.extname(fp)]||"application/octet-stream"});
  f.createReadStream(fp).pipe(s);
}).listen(3002,()=>console.log("up on 3002"));
