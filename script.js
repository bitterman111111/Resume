
function downloadPDF() {
  const element = document.body;
  html2pdf().from(element).save('page.pdf');
}
