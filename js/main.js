let arr=[]
let username ,
email,
phone,
age,
password,
rePassword,
namealert ,
emailalert ,
phonealert ,
agealert ,
passAlert ,
rePassAlert;



$(document).ready(()=>{
    $(".loading").fadeOut(500,()=>{
        $(".loading").removeClass() 
        $("body").removeClass()
    })
    
}) 



 $(".menu i").click(()=>{
    if($("nav").width() == "0"){
        open()
    
    }else{
        close()
    }
})


function close(){
    ($("nav").animate({
        width:"0px"
    },10),
    $(".nav").animate({
        left:"-11px"
    },20),
    $(".fa-align-justify").toggleClass("fa-times"),
    $(".nav-social").addClass("opacity-0"))
    $(".nav-item .item1").animate({
        opacity: "0",
        paddingTop: "500px"
    }, 800), $(".nav-item .item2").animate({
        opacity: "0",
        paddingTop: "500px"
    }, 900), $(".nav-item .item3").animate({
        opacity: "0",
        paddingTop: "500px"
    }, 1000), $(".nav-item .item4").animate({
        opacity: "0",
        paddingTop: "500px"
    }, 1100), $(".nav-item .item5").animate({
        opacity: "0",
        paddingTop: "500px"
    }, 1200), $(".nav-item .item6").animate({
        opacity: "0",
        paddingTop: "500px" })
}

function open(){
    ($("nav").animate({
        width:"250px"
    },20),
    $(".nav").animate({
        left:"240px"
    },10),
    $(".fa-align-justify").toggleClass("fa-times"),
    $(".content").removeClass("opacity-0"),
    $(".nav-social").removeClass("opacity-0")
    )
    $(".nav-item .item1").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1100), $(".nav-item .item2").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1200), $(".nav-item .item3").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1300), $(".nav-item .item4").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1400), $(".nav-item .item5").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1500), $(".nav-item .item6").animate({
        opacity: "1",
        paddingTop: "25px" })
} 

let row =document.getElementById("row")


async function search(q){
    let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`)
    meal =await meal.json()
    displayMeal(meal.meals)
    return meal
    
}
search("")



function displayMeal(arr){
    let meal=``
    for(let i = 0;i < arr.length;i++){
        meal+=`
        <div class="col-md-6 col-lg-3">
        <div class="info">
            <div class="img-meal position-relative" onclick="getMeal(${arr[i].idMeal})">
                <img src="${arr[i].strMealThumb}" class="w-100 rounded "  alt="">
                <div class="post d-flex align-items-center position-absolute rounded">
                    <div class="layer">
                        <h2 class="fs-3 ms-2">${arr[i].strMeal}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }
    row.innerHTML=meal
    
    $("html , body").animate({
        scrollTop:0
    },200)

}
function displayByCat(){
    let x=``
    for (let i = 0; i < arr.length; i++) {
        x+=`
        <div class="col-md-6 col-lg-3">
        <div class="info">
            <div class="img-meal position-relative" onclick="filterCat('${arr[i].strCategory}')">
                <img src="${arr[i].strCategoryThumb}" class="w-100 rounded "  alt="">
                <div class="post d-flex align-items-center position-absolute rounded">
                    <div class="layer text-center">
                        <h2 class="fw-light ms-2">${arr[i].strCategory}</h2>
                        <p>${arr[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        `   
    }
    row.innerHTML=x

}

function displayByArea(){
    let x =``
    for (let i = 0; i < arr.length; i++) {
        x+=`
        <div class="col-md-6 col-lg-3">
        <div class="info">
            <div class="img-meal position-relative text-center" onclick="filterByArea('${arr[i].strArea}')">
                <i class="fa-solid fa-house-laptop fa-4x text-white"></i>
                
                <h2 class="text-white ">${arr[i].strArea}</h2>
            </div>
        </div>
    </div>
        `
    }
    row.innerHTML=x
}
function displayByIng(){
    let x = ``
    for (let i = 0; i < arr.length; i++) {
        x+=`
        <div class="col-md-6 col-lg-3">
        <div class="info">
            <div class="img-meal position-relative text-center" onclick="filterIng('${arr[i].strIngredient}')">
                <i class="fa-solid fa-drumstick-bite fa-4x text-white"></i>
                <h2 class="text-white ">${arr[i].strIngredient}</h2>
                <p class="text-white ">${arr[i].strDescription.split(" ").slice(0,20).join(" ")}
            </div>
        </div>
    </div>
        `
        
    }
    row.innerHTML=x
    $("html , body").animate({
        scrollTop:0
    },200)
}
async function filterIng(i){
    let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${i}`)
    meal = await meal.json()
    displayMeal(meal.meals.slice(0,20))
}
async function filterByArea(y){
    let meal =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${y}`)
    meal = await meal.json()
    displayMeal(meal.meals.slice(0,20))
    
}
async function filterCat(z){
    let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${z}`)
    meal = await meal.json()
    displayMeal(meal.meals)
}
async function getCat(list){
    let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/${list}`)
    meal = await meal.json()
    return meal
}
async function getMeal(id){
    let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    meal =await meal.json()
    displayMealClick(meal.meals[0])
}

function displayMealClick(meal){
    let recipes=``
    for(let i=1; i < 20;i++){
        if(meal[`strIngredient${i}`]){
            recipes+=`<li class="my-3 mx-1 p-1 alert-success rounded">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
        }
    }
    let tags =meal.strTags?.split(",")
    let tagstr =``
    for(let i=0;i < tags?.length;i++){
        tagstr+=`
        <li class="my-3 mx-1 p-1 alert-danger rounded">${tags[i]}</li>`
    }

    let x =`
    <div class="col-md-4">
    <img src="${meal.strMealThumb}" class="w-100" alt="">
    <h2 class="text-white">${meal.strMeal}</h2>
</div>
<div class="col-md-8 text-white pb-5">
    <h2 class="pb-3">Instructions</h2>
    <p class="pb-3">${meal.strInstructions}</p>
         <p class="fw-bolder fs-3">Area : <span  class="fs-3" >${meal.strArea}</span></p>
         <p class="fw-bolder fs-3">Category  : <span class="fs-3" >${meal.strCategory}</span></p>
         <h3 class="py-2">Recipes :</h3>
         <ul class="d-flex flex-wrap" id="recipes">
         </ul>
         <h3>Tags :</h3>
         <ul class="d-flex flex-wrap" id="tags">
         </ul>
         <a class="btn btn-success text-white" target="_blank" href="${meal.strSource}">Source</a>
         <a class="btn btn-danger youtube text-white" target="_blank" href="${meal.strYoutube}">Youtub</a>
</div>
    `
    $("html , body").animate({
        scrollTop:0
    },200)
    row.innerHTML=x
    document.getElementById("recipes").innerHTML=recipes
    document.getElementById("tags").innerHTML=tagstr
}

async function getLetter(l){
    let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${l}`)
    meal = await meal.json()
    displayMeal(meal.meals)
}


$(".nav-item a").click(async (e)=>{
    let list=e.target.getAttribute("data")
    close()
   row.innerHTML=""
   let x;
    document.getElementById("container-search").innerHTML=""
    if(list == "search"){
        document.getElementById("container-search").innerHTML=`
        <div class="row">
        <div class="col-md-6">
        <input id="searchName" type="text" placeholder="Search By Name" class="form-control mb-1 text-center">
    </div>
    <div class="col-md-6">
    <input type="text" id="searchLetter" placeholder="search By First Letter..." class="form-control mb-1 text-center">
</div>
</div>
        `
        $("#searchName").keyup((e) => {
            if(e.target.value ==''){
                search("")
            }else{
               search(e.target.value) 
            }
            
            
        })
        $("#searchLetter").keyup((e) => {
            getLetter(e.target.value)
            
        })
    } 
    if(list == "categories"){
        
        x= await getCat(list+".php")
        arr=x.categories.splice(0,20)
        displayByCat()
    }
    if(list == 'area'){
        x = await getCat("list.php?a=list")
        arr = x.meals.splice(0,20)
        displayByArea()
    }
    if(list == "ingred"){
        x = await getCat("list.php?i=list")
        arr = x.meals.splice(0,20)
        displayByIng()
    }
    if(list == "contact"){
        row.innerHTML=`
        <section>
        <div class="container w-100 m-auto  mb-4">
            <div class="contact">
            <div class="row gy-5">
                    <div class="col-md-6 ">
                            <input type="text" id="name" onkeyup="validation()"   placeholder="Enter your Name" class="form-control ">
                            <div class="alert  text-center d-none form-control my-1" id="namealert"> Special Characters and Numbers not allowed</div>
                    </div>
                    <div class="col-md-6" >
                        <input type="email" id="email" onkeyup="validation()"  placeholder="Enter your Email" class="form-control ">
                        <div class="alert  text-center d-none form-control my-1 " id="emailalert">Email not valid *exemple@yyy.zzz</div>
                    </div>
                    <div class="col-md-6">
                        <input type="tel" id="phone" onkeyup="validation()" placeholder="Enter your Phone" class="form-control ">
                        <div class="alert  text-center d-none form-control my-1" id="phonealert">Enter valid Phone Number</div>
                    </div>
                    <div class="col-md-6">
                        <input type="number" id="age" onkeyup="validation()" placeholder="Enter your Age" class="form-control ">
                        <div class="alert  text-center d-none form-control my-1" id="agealert">Enter valid Age </div>
                        
                    </div>
                    <div class="col-md-6">
                        <input type="password" id="password" onkeyup="validation()" placeholder="Enter your Password" class="form-control ">
                        <div class="alert  text-center d-none form-control my-1" id="passalert">Enter valid password Minimum eight characters, at least one letter and one number:</div>
                    </div>
                <div class="col-md-6">
                    <input type="password" id="rePassword" onkeyup="validation()"  placeholder="RePassword" class="form-control ">
                    <div class="alert  text-center d-none form-control my-1" id="repassalert">Enter valid Repassword</div>
                </div>
            <div class="col-md-6 offset-5">
                <button class="btn btn-outline-danger ms-5" id="submit" disabled>Submit</button>
            </div>
            
            </div>                
            </div>
    
        </div>
    </section>
        `
         username = document.getElementById("name")
         email = document.getElementById("email")
         phone = document.getElementById("phone")
         age = document.getElementById("age")
         password = document.getElementById("password")
         rePassword = document.getElementById("rePassword")
         namealert = document.getElementById("namealert")
         emailalert = document.getElementById("emailalert")
         phonealert = document.getElementById("phonealert")
         agealert = document.getElementById("agealert")
         passAlert = document.getElementById("passalert")
         rePassAlert = document.getElementById("repassalert")

         username.addEventListener("focus", () => {
            nameClick = true
        })
        email.addEventListener("focus", () => {
            emailClick = true
        })
        phone.addEventListener("focus", () => {
            phoneClick = true
        })
        age.addEventListener("focus", () => {
            ageClick = true
        })
        password.addEventListener("focus", () => {
            passwordClick = true
        })
        rePassword.addEventListener("focus", () => {
            repasswordClick = true
        })

    }



}) 
let nameClick = false,
    emailClick = false,
    phoneClick = false,
    ageClick = false,
    passwordClick = false,
    repasswordClick = false;

function validation(){
    if(nameClick){
        if(valdname()){
            namealert.classList.add("d-none")
        }else{
            namealert.classList.remove("d-none")
        }        
    }


    if(emailClick){
        if(valdEmail()){
            emailalert.classList.add("d-none")
        }else{
            emailalert.classList.remove("d-none")
        }        
    }

    if(passwordClick){
        if(valdPass()){
            passAlert.classList.add("d-none")
        }else{
            passAlert.classList.remove("d-none")
        }        
    }


    if(ageClick){
        if(valdAge()){
            agealert.classList.add("d-none")
        }else{
            agealert.classList.remove("d-none")
        }        
    }


    if(phoneClick){
        if(valdPhone()){
            phonealert.classList.add("d-none")
        }else{
            phonealert.classList.remove("d-none")
        }        
    }


    if(passwordClick){
        if(valdRePass()){
            rePassAlert.classList.add("d-none")
        }else{
            rePassAlert.classList.remove("d-none")
        }        
    }





    if(valdAge() && valdEmail() && valdPass() && valdPhone() && valdname() && valdRePass()){
        document.getElementById("submit").removeAttribute("disabled")
        document.getElementById("submit").classList.replace("btn-danger","btn-success")

    }else{
        document.getElementById("submit").setAttribute("disabled","true")
        document.getElementById("submit").classList.replace("btn-success","btn-danger")
    }
}

function valdname(){
        return /^[a-zA-z]+$/.test(username.value)
}

function valdEmail(){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)
}

function valdPass(){
    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/.test(password.value)
}

function valdAge(){

    return /^[1-9][0-9]?$|^100$/.test(age.value)
}

function valdPhone(){

    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone.value)
}

function valdRePass(){
    return rePassword.value == password.value
}









