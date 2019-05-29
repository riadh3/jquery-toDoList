$(document).ready(()=>{

    let $list = $('#items-list')
// add item to list
$('#add-button').on('click', function(e){
    e.preventDefault()
let $textItem = $('#item-input').val()
if ($textItem){
    // to confirm that there is always a valid text to add
    $list.append(`<li>${$textItem}</li>`)
    $('#item-input').val('')
}
else null
})

// delit item on click
$list.on('click', 'li', function(){
    $(this).remove()
})


})