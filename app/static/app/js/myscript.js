$('#slider1, #slider2, #slider3').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            autoplay: true,
        },
        600: {
            items: 3,
            nav: true,
            autoplay: true,
        },
        1000: {
            items: 5,
            nav: true,
            loop: true,
            autoplay: true,
        }
    }
})

// $('.remove-cart').click(async function() {
//     var id = $(this).attr('pid');
//     console.log(id)
// })






$('.plus-cart').click(async function(){
    try{
        var id=$(this).attr("pid");
        // console.log(id)
        var response = await axios.get(`/pluscart/${id}`)
        if(response.status == 200 && response.data )  {
            document.getElementById("amount").innerHTML = response.data.amount
            document.getElementById("totalamount").innerHTML = response.data.totalamount
         }
        else{
             document.getElementById("amount").innerHTML = "-"
             document.getElementById("totalamount").innerHTML = "-"  
         }
    }
    catch( err){
        document.getElementById("amount").innerHTML = response.data.amount
        document.getElementById("totalamount").innerHTML = response.data.totalamount 
    }
    
    
})

// --------------ajex----------------
// $('.plus-cart').click(function(){
//     var id=$(this).attr("pid").toString();
//     $ajex({
//         type:"GET",
//         url:"/pluscart",
//         data:{
//             prod_id:id
//         },
//         success:function(data){
//             console.log(data)
//             console.log("success")
//         }
//     })
// })
// ----------------end-------------




$('.remove-cart').click( async function() {
    try{
        var id = $(this).attr('pid');
        var response = await axios.get(`/removecart/${id}`)

        // var id = '1'
        // var response = await axios.get(`http://fakeapi.jsonparseronline.com/posts/${id}`)


        // var data ={
        //     product_name :"vcgvdgch",
        //     product_rate:"100"
        // }
        // var response = await axios.post(`http://fakeapi.jsonparseronline.com/posts/`,data)
        console.log(response)
       
        if(response.status == 200 && response.data )  {
           document.getElementById("amount").innerHTML = response.data.amount
           document.getElementById("totalamount").innerHTML = response.data.totalamount
        }
        else{
            document.getElementById("amount").innerHTML = "-"
            document.getElementById("totalamount").innerHTML = "-"  
        }
    }
    catch(err){
        console.log(err)
        document.getElementById("amount").innerHTML = "-"
        document.getElementById("totalamount").innerHTML = "-" 
    }
    
})