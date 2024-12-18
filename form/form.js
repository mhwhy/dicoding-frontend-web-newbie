const submitAction = document.getElementById('formDataDiri');

submitAction.addEventListener('submit', function(event){
    const inputNama = document.getElementById('inputNama').value;
    const InputDomisili = document.getElementById('inputDomisili').value;
    const pesanTersembunyoi = `halo ${inputNama} bagaimana cuaca di ${InputDomisili}`

    document.getElementById('messageAfterSubmit').innerText = pesanTersembunyoi;
    event.preventDefault();
})