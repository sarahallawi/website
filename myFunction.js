
fetch('data.json')
    .then(res => res.json())
    .then(data => {
        handeldata(data);
    })

function handeldata(flats) {
    const flat = document.getElementById("flats");
    flats.forEach(myflat => {
        let flat1 = creatrow(myflat);
         let flatdetal = addDeta1(myflat);
        flat.appendChild(flat1);
         flat.appendChild(flatdetal);

    });


}
let arrdetalis = [];

function creatrow(myflat) {
    const row = document.createElement("tr");
    for (let i = 0; i < 5; i++) {
        const cell = document.createElement("td");
        row.appendChild(cell)
    }
    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.onchange = function (e) {
        nextbtn.disabled = false;
        for (let index = 2, index1 = 0; index < 5; index++, index1++) {
            arrdetalis[index1] = (this.parentElement.parentElement.children[index].innerText);

        }
    }
    row.children[0].appendChild(radio);

    const chek = document.createElement("input");
    chek.setAttribute("type", "checkbox");
    chek.onclick = function () {
        chek.parentElement.parentElement.nextElementSibling.classList.toggle("hid");
    }
    row.children[1].appendChild(chek);

    row.children[2].textContent = `${myflat.price}`;

    row.children[3].textContent = `${myflat.dital}`;

    row.children[4].textContent = `${myflat.city}`;



    return row;

}



function addDeta1(myflat) {
    const row = document.createElement("tr");
    row.classList.add("hid")
    row.innerHTML = `
    <td colspan="5">
          <div class="info">
          
           <ul class="text">
           
           
           <li>الطابق:${myflat.floor}</li>
           <li>متوفر كراج:${myflat.gar}</li>
           <li>المنطقة:${myflat.area}</li>
           <li>مفروشة:${myflat.mafrosha} </li>
           <li>مساحة البلكون: ${myflat.masaha}</li>
           <li>الملكية:${myflat.have}</li>
          
        </ul>
        <div class="imges">
            <img src="${myflat.img1}" alt="">
            <img src="${myflat.img2}" alt="">
            <img src="${myflat.img3}" alt="">



        </div>

    </div>

</td>`


    return row;


}

// --
let nextbtn = document.getElementById("btnsub");
nextbtn.disabled = true;

let myform = document.querySelector(".form");

nextbtn.onclick = function () {
    myform.style.display = 'flex'
    Captcha();
};
let cancel = document.getElementById("cancelbtn");
cancel.onclick = function () {
    myform.style.display = "none"
}
// Define the characters that can be used in the captcha code

function Captcha() {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Generate a random string of 6 characters
    let captchaCode = "";
    for (let i = 0; i < 6; i++) {
        captchaCode += chars[Math.floor(Math.random() * chars.length)];
    }
    let refr = document.getElementById("refrlpl");
    refr.innerText = captchaCode;
}
//----------

let supbtn = document.getElementById("done");
supbtn.onclick = function () {
    var username = document.getElementById("name");
    var ID = document.getElementById("IDC");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var captcha = document.getElementById("txtCaptcha");
    var refrlpl = document.getElementById("refrlpl").innerText;

    username.classList.remove("worong")
    ID.classList.remove("worong")
    phone.classList.remove("worong")
    email.classList.remove("worong")
    captcha.classList.remove("worong")


    if (username.value == "") {
        username.classList.add("worong")

        alert("يرجى ملء جميع الحقول الإلزامية");
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value) && email.value != "") {
        email.classList.add("worong")

        alert("يرجى إدخال عنوان بريد إلكتروني صالح");
        return false;
    }

    var numberPattern = /^(0[1-9]|1[0-5])[0-9]{9}$/;
    if (!numberPattern.test(ID.value)) {
        ID.classList.add("worong")
        alert("يرجى إدخال رقم وطني صالح بين 01 و 15");
        return false;
    }


    var phonePattern = /((0)(93|94|95|96|98|99)([0-9]{7}))|((0)(92|95|96|97)([0-9]{7}))/;
    if (!phonePattern.test(phone.value) && phone.value != "") {
        phone.classList.add("worong")
        alert("يرجى إدخال رقم هاتف صالح مع رمز البلد (مثال: 0931234567)");
        return false;
    }

    if (captcha.value == "") {
        captcha.classList.add("worong")
        alert("يرجى إدخال رمز التحقق من الكابتشا");
        return false;
    }

    if (captcha.value != refrlpl) {
        alert("رمز التحقق من الكابتشا غير صحيح");
        captcha.classList.add("worong")
        return false;
    }
    alert(" لقد تم حجز شقة بنجاح \n"
        + "مدينة " + arrdetalis[2] + "\n"
        + " " + arrdetalis[1] + "\n"
        + "بسعر " + arrdetalis[0] + "\n"


    )
}



