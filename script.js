
document.getElementById('downloadPdf').addEventListener('click', () => {
    const element = document.body;

    const opt = {
        margin:       0,
        filename:     'page.pdf',
        image:        { type: 'jpeg', quality: 1.0 },
        html2canvas:  { scale: 4, useCORS: true },
        jsPDF:        { unit: 'pt', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
});