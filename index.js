// listen for user click on print resume button
window.onload = function (){
  document.querySelector("#print_pdf")
  .addEventListener("click", ()=> {
    var resume = this.document.querySelector("#resume");
    var print_options = {
      filename: 'resume_ntigs.pdf',
      image: {type:'JPG', quality: 0.98}
    }
    html2pdf(resume, print_options);
  })
}