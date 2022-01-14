// Put your application javascript here
// alert(1)

if(document.querySelector('#sort_by')!=null)
document.querySelector('#sort_by').addEventListener('change', function (e){
    let url = new URL(window.location.href);
    url.searchParams.set('sort_by', e.currentTarget.value)
    window.location = url.href
})