$(function () {
    //フォーム
    $(".alert").hide();

    $("#submitBtn").click(function () {
        //名前
        if (!$("#name").val()) {
            $("#nameSection .alert").show();
        } else {
            $("#nameSection .alert").hide();
        }
        //ふりがな
        if (!$("#kana").val()) {
            $("#kanaSection .alert").show();
        } else {
            $("#kanaSection .alert").hide();
        }
        //mail
        if (!$("#mail").val()) {
            $("#mailSection .alert").show();
        } else {
            $("#mailSection .alert").hide();
        }
        //mail2
        if (!$("#mail2").val()) {
            $("#mail2Section .alert").show();
        } else {
            $("#mail2Section .alert").hide();
        }

        //有無
        var radioChk = $('input[name="reply"]:checked').length;

        if (radioChk == 0) {
            $("#umuSection .alert").show();
        } else {
            $("#umuSection .alert").hide();
        }

        //問い合わせ内容
        if (!$("#textarea").val()) {
            $("#textareaSection .alert").show();
        } else {
            $("#textareaSection .alert").hide();
        }

        return false;


    });

    //同意するチェックボックス
    const agreeCheckbox = document.getElementById("check");
    const submitBtn = document.getElementById("submitBtn");


    agreeCheckbox.addEventListener("click", () => {
        if (agreeCheckbox.checked === true) {
            submitBtn.disabled = false;
        }
        else {
            submitBtn.disabled = true;
        }


    });

});