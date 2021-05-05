window.onload = () => {
    let btnPrev = document.querySelector('.prev')
    let btnNext = document.querySelector('.next')
    let images = document.querySelectorAll('.bn img')
    let imagesstart = 0; 

    btnPrev.onclick = () =>{
        handleCarosel(-1)
    }    

    btnNext.onclick = () =>{
        handleCarosel(-1)
    }    
    let handleCarosel = (convert) => {
        imagesstart = imagesstart + convert
        if (imagesstart < 0) imagesstart = images.length -1
        if (imagesstart >= images.length) imagesstart = 0
    
    for (let i=0 ;i<images.length;i++){
        images[i].style.display = 'none'   
    }
        images[imagesstart].style.display = 'block'
    }
    setInterval(() => {
    handleCarosel(-1)
    },2000)  

    let clickconvertleft = document.querySelector('.convertleft')
    let clickconvertright = document.querySelector('.converright')
    let clickwith1


















}




    

    
    
    
    
    
    


    

    
    
    
    
    
    
    
    
    //     let btnPre1 = document.querySelector('.pre1')
    //     let btnPre2 = document.querySelector('.pre2')
    //     let images = document.querySelectorAll('.bn')
    //     let imageActive = 0;
    
    //     btnPre1.onclick  = () => {
    //         handleCarosel(-1)
    //     }
    //     btnPre2.onclick  = () => {
    //         handleCarosel(1)
    //     }
    
    //     let handleCarosel = (convert) => {
    //         imageActive = imageActive + convert
    //     if (imageActive < 0) imageActive = images.length -1
    //     if (imageActive >= images.length) imageActive = 0
    
    //     for (let i = 0; i < images.length; i++) {
    //         images[i].style.display = 'none'
    //     }
    //     images[imageActive].style.display = 'block'
    //     }
    //     setInterval(() => {
    //         handleCarosel(-1)
    //     },2000)

























