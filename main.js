
jQuery(document).ready(function($){
    $('.et_pb_toggle').each(function(item,item2) {
        $(item2).click(function(){
        $(item2).siblings().removeClass('et_pb_toggle_open').addClass('et_pb_toggle_close')
        $(item2).siblings().find('.et_pb_toggle_content').css('display','none')
        
        $(this).removeClass('et_pb_toggle_close').addClass('et_pb_toggle_open')
        $(this).find('.et_pb_toggle_content').css('display','block')
        })
        })


Array.from(document.querySelectorAll('.other-locations-slider .swiper-slide .location-overlay .location')).map((item,index) => {

    if(index == 1) item.classList.add('overlay-blue')
    if(index == 2) item.classList.add('overlay-red')
    if(index == 3) item.classList.add('overlay-yellow')
    if(index == 4) item.classList.add('overlay-black')
    if(index == 5) item.classList.add('overlay-blue')
    if(index == 6) item.classList.add('overlay-red')
    if(index == 7) item.classList.add('overlay-yellow')

    
    })


    Array.from(document.querySelectorAll('.other-locations-slider .swiper-slide .location-overlay .location-descr')).map((item,index) => {

        if(index == 1) item.classList.add('overlay-blue')
        if(index == 2) item.classList.add('overlay-red')
        if(index == 3) item.classList.add('overlay-yellow')
        if(index == 4) item.classList.add('overlay-black')
        if(index == 5) item.classList.add('overlay-blue')
        if(index == 6) item.classList.add('overlay-red')
        if(index == 7) item.classList.add('overlay-yellow')
    
        
        })



        Array.from(document.querySelectorAll('.results .project a')).map((item) => {
           
            let href = item.getAttribute('href')
            let getHref = href.split("/project").join('')
            item.setAttribute('href',getHref)
            
          })
 
             
           Array.from(document.querySelectorAll('.other-locations a')).map((item) => {
            
            let href = item.getAttribute('href')
            let getHref = href.split("/project").join('')
            item.setAttribute('href',getHref)
            
          }) 
          
          

          /*REVIEW SLIDER */

          function Slider(numElem) {
            //caching DOM
            let sliderWrap = document.querySelector('.review-slider .glsr-reviews')
            let sliderItem = document.querySelectorAll('.review-slider .glsr-review')[0].offsetWidth + 30
            let sliderLenght = document.querySelectorAll('.review-slider .glsr-review').length
            let outerWidthSlider = sliderItem * sliderLenght
            sliderWrap.style.width = outerWidthSlider + "px"
            let leftArrow = document.querySelector('.arrow_carrot-right')
            let rightArrow = document.querySelector('.arrow_carrot-left')
            let num = numElem
            let moverItem = 0
  
  
  
            leftArrow.onclick = function() {
  
                moverItem = moverItem + sliderItem
                num++
                sliderWrap.style.marginLeft = -moverItem + "px"
  
                if (num >= sliderLenght) {
  
                    num = numElem
                    moverItem = 0
                    sliderWrap.style.marginLeft = 0 + "px"
  
                }
  
  
  
  
            }
  
  
            rightArrow.onclick = function() {
  
                moverItem = moverItem - sliderItem
                num--
                sliderWrap.style.marginLeft = -moverItem + "px"
                if (num <= numElem) {
  
                    num = numElem
                    moverItem = 0
                    sliderWrap.style.marginLeft = 0 + "px"
  
                }
  
  
  
  
            }
  
  
        }
  
        //Breaking points 
  
        if(document.querySelector('.review-slider .glsr-reviews')) {

        Slider(3)
  
  
        //tablet
        if (window.outerWidth < 1025)
            Slider(1)
        //mobile
        if (window.outerWidth < 421)
            Slider(0)
        }
  
      let quotes = `<div class="quote">
                                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 52.35 42.6" style="enable-background:new 0 0 52.35 42.6;" xml:space="preserve">
                                          <style type="text/css">
                                              .st0{fill:none;stroke:#F15946;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                              .st1{fill:none;stroke:#FFFFFF;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                              .st2{fill:#F15946;}
                                              .st3{fill:none;stroke:#FFFFFF;stroke-width:3;stroke-miterlimit:10;}
                                              .st4{fill:#50B4D2;}
                                              .st5{fill:none;stroke:#ECECEC;stroke-width:2;stroke-miterlimit:10;}
                                              .st6{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}
                                              .st7{fill:none;stroke:#FFFFFF;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                              .st8{fill:#FFFFFF;}
                                              .st9{fill:none;stroke:#FFD639;stroke-width:4;stroke-miterlimit:10;}
                                              .st10{fill:none;stroke:#000000;stroke-width:5;stroke-miterlimit:10;}
                                              .st11{fill:#FFD22C;}
                                              .st12{fill:#2896BE;}
                                              .st13{fill:#035A78;}
                                              .st14{fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;}
                                              .st15{fill:#DD453A;}
                                              .st16{fill:none;stroke:#FFFFFF;stroke-width:1.6558;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                              .st17{fill:none;stroke:#FFFFFF;stroke-miterlimit:10;}
                                              .st18{fill:none;stroke:#000000;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                              .st19{fill:none;stroke:#000000;stroke-width:1.6558;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                              .st20{fill:none;stroke:#2896BE;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                              .st21{fill:none;stroke:#2896BE;stroke-width:1.6558;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                              .st22{fill:#50B4D2;stroke:#50B4D2;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                              .st23{fill:#FFFFFF;stroke:#F15946;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                              .st24{fill:none;stroke:#F15946;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                              .st25{fill:none;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
                                              .st26{stroke:#FFD22C;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                              .st27{fill:none;stroke:#FFD22C;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                              .st28{fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}
                                              .st29{fill:#ECECEC;}
                                          </style>
                                          <g>
                                              <g>
                                                  <path d="M0,42.6c0-3,0.023-5.925,0.074-8.775c0.049-2.85,0.125-5.475,0.225-7.875C0.6,17.351,1.973,10.875,4.424,6.525
                                                      C6.873,2.175,11.549,0,18.449,0l1.801,7.65c-3.9,0.101-6.401,1.401-7.5,3.9c-1.102,2.5-1.65,5.7-1.65,9.6h10.5V42.6H0z
                                                      M30.75,42.6c0-3,0.023-5.925,0.074-8.775c0.049-2.85,0.125-5.475,0.225-7.875c0.301-8.599,1.674-15.075,4.125-19.425
                                                      C37.623,2.175,42.299,0,49.199,0L51,7.65c-3.9,0.101-6.401,1.401-7.5,3.9c-1.102,2.5-1.65,5.7-1.65,9.6h10.5V42.6H30.75z"></path>
                                              </g>
                                          </g>
                                      </svg>
                                  </div>`
      
     $('.glsr-review-rating').each(function(item,item2){
       
      $(item2).prepend(quotes)
     })
      
      $('.glsr-review-author').each(function () {
    $(this.nextSibling).wrap('<span class="location-field"></span>');
  });



  Array.from(document.querySelectorAll('.other-locations-slider .swiper-slide .location-overlay h2 a')).map((item) => {

    let parentH2 = item.parentNode.innerText
    let splitH2 = parentH2.split(" ").join("-").split(".").join("-")
    let href = "https://"+window.location.host+"/" + splitH2
    item.setAttribute("href", href)
    $(item).parent().parent().parent().find('.btn-wrap a').attr('href', href)
    
    
    })




  
        if(document.querySelector('#search')) {
               
                  $('#search').click(function(){
                  $('.results').fadeIn();
                })
          
              document.querySelector('#search').onkeyup = function () {
    
              document.querySelector('.results .et_pb_ajax_pagination_container').style.height = "auto"
                
              Array.from(document.querySelectorAll('.results .project h2 a')).map((item) => {
    
              let txtValue = item.textContent || item.innerText
              let filter = this.value.toUpperCase()    
              
              if (txtValue.toUpperCase().indexOf(filter) > -1) 
    
                        item.parentNode.parentNode.style.display = ""
              
    
                else 
                        item.parentNode.parentNode.style.display = "none"
    
                
    
              
    
              })
    
              if(this.value.length < 1)   document.querySelector('.results .et_pb_ajax_pagination_container').style.height = "95px"
               
    
              }
              
             Array.from(document.querySelectorAll('.results .project a')).map((item) => {
               
               let href = item.getAttribute('href')
               let getHref = href.split("/project").join('')
               item.setAttribute('href',getHref)
               
             })
    
                
              Array.from(document.querySelectorAll('.other-locations a')).map((item) => {
               
               let href = item.getAttribute('href')
               let getHref = href.split("/project").join('')
               item.setAttribute('href',getHref)
               
             })
       
              
              
             }
        
                           

    })
