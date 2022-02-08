// Put your application javascript here
// alert(1)

if(document.querySelector('#sort_by')!=null) {
    document.querySelector('#sort_by').addEventListener('change', function (e) {
        let url = new URL(window.location.href);
        url.searchParams.set('sort_by', e.currentTarget.value)
        window.location = url.href
    })
}

if(document.querySelector('#AddressCountryNew')!=null){
    document.getElementById('AddressCountryNew').addEventListener('change', function (e){
        //let provinces = this.options[this.selectedIndex].getAttribute('data-provinces')
        let provinces = this.options[this.selectedIndex].dataset.provinces
        let provinceSelector = document.getElementById('AddressProvinceNew')
        let provinceArray = JSON.parse(provinces) // распарсили провинции
        // console.log(provinces) // а так будет закодированая JSON строка
        if(provinceArray.length < 1){
            provinceSelector.setAttribute('disabled', 'disabled')
        }else{
            provinceSelector.removeAttribute('disabled')
        }
        provinceSelector.innerHTML = ''
        var options = ''
        for(var i = 0; i<provinceArray.length; i++ ){
            options += '<option value="'+ provinceArray[i][0] +'"> '+ provinceArray[i][0] +' </option>'
        }
        provinceSelector.innerHTML = options
    })
}
if(document.getElementById('forgotPassword')!=null){
    document.getElementById("forgotPassword").addEventListener('click', function (e){
        document.getElementById("forgot_password_form").classList.toggle('d-none')

       // const element = document.getElementById("forgot_password_form");
       // if(element.classList.contains("d-none")){
       //     element.classList.remove("d-none")
       //     element.classList.add("d-block")
       // }
    })
}

var localeItems = document.querySelectorAll("#localeItem")
if(localeItems.length > 0){
    localeItems.forEach(item =>{
        console.log(item)
        item.addEventListener("click", event=>{
            document.getElementById("localCode").value=item.getAttribute("lang")
            document.getElementById("localization_form_tag").submit()
        })
    })
}