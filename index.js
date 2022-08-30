function enrolled() {
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var image = $("#photo").val();
    var gender = $('input[name="gender"]:checked').val();
    var selected = new Array();
    $("input[type=checkbox]:checked").each(function() {
        selected.push(this.value);
    });
    var data = '<div class=submitted1>' + '<table><tr><td><p class="pass1"><strong>Name </strong>: ' + `${name}` + '</p><p class="pass1"><strong>Email </strong>: ' + `${email}` + '</p><p class="pass1"><strong>Phone </strong>: ' + `${phone}` + '</p><p class="pass1"><strong>Gender</strong> : ' + `${gender}` + '</p><p class="pass1"><strong>Skills</strong> : ' + `${selected}` + '<td><img src="' + `${image}` + '"></td></tr></table></div>';
    $('#submit').append(data);
    $("#form").trigger("reset");
}