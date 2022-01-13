import React,{useEffect, useState} from 'react'

import '../assets/css/style.css';

import $ from 'jquery'
import Loader from 'react-loader-spinner';
import { Loading } from 'react-fullscreen-loading';
import Lottie from 'react-lottie-player';

import ArrowJson from '../assets/arrow_landingpage.json'
import MotionJson from '../assets/landing_motion.json'
import YellowJson from '../assets/arrow_landingpage-yellow.json'
import { Modal } from 'react-bootstrap'
import AOS from 'aos'








AOS.init()


$(window).on('resize', function() {


    var a = $(".cl_dv_1").outerHeight();
    var b = $(".cl_dv_2").outerHeight();
    var c = $(".cl_dv_3").outerHeight();
    var d = $(".cl_dv_4").outerHeight();
    var div_height = a + b + c;
    var bot_height = d;

    var div_height_mob = a + b;
    var bot_height_mob = d;
    var bot_height_mob_2 = d + 2;

    //alert(a+b+c);




    function myFunction(x) {
        if (x.matches) { // If media query matches
            $('.first_course_img').css({
                "height": div_height_mob + "px"
            });
            $('.last_course_img').css({
                "height": bot_height_mob + "px"
            });
            $('.course-section .col-md-3:last-child').css({
                "top": -bot_height_mob_2 + "px"
            });
            $('.classes_div.mob_img').css({
                "height": bot_height_mob + "px"
            });
        } else {
            $('.first_course_img').css({
                "height": div_height + "px"
            });
            $('.last_course_img').css({
                "height": bot_height + "px"
            });
        }
    }

    var x = window.matchMedia("(max-width: 767px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes


});
$(document).ready(function() {
    $(window).trigger('resize');
});


$(document).ready(function() {
    window.onscroll = function() {
       
        myFunction()
    };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    var heihgt_1 = $("#myHeader").outerHeight();
    var heihgt_2 = $(".banner").outerHeight();

    var main_height = heihgt_1 + heihgt_2;
    //alert(main_height);

    function myFunction() {

       
        if (window.pageYOffset > main_height) {
            header.classList.add("sticky");
            $("#overflow_hidden").css({
                "height": heihgt_1 + "px"
            });
        } else {
            header.classList.remove("sticky");

            $("#overflow_hidden").css({
                "height": 0 + "px"
            });
        }
    }
});
   


    
function User() {


    const [modalInput, setModal] = useState(false)

    useEffect(() => {
       
        const loader_id=document.getElementById("loader");
        
        setTimeout(function(){ loader_id.style.display = 'none';}, 1000);
      

    }, [])
    
    
    function showModal()
    {
        setModal(true);
        
    }

    const hideModal = () => {
        setModal(false);
      };
    

    return (
        <>

<div id="loader" class="spinner-border"></div>

<header id="myHeader">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-9">
                    <a class="logo" href="#">
                        <div class="logo_img"></div>
                    </a>
                </div>
                <div class="col-md-3">
                    <a class="download_broch_1" href="#"  ><span
                            class="mob_down" onClick={showModal}>DOWNLOAD </span>BROCHURE
                    

                        <Lottie
      loop
      animationData={ArrowJson}
      play pause={1000} speed={1} 
      style={{"width":"30px","height":"30px","position":"relative","top":"4px"}}
    />
                       
                    </a>
                </div>
            </div>
        </div>
    </header>

    <div id="overflow_hidden">

    </div>

    <section class="banner">
        <div class="container-fluid">
            <div class="row first_row">
                <div class="col-md-5  center_sec motion_section">
                   
                
                <Lottie
      loop
      animationData={MotionJson}
      play pause={1000} speed={1} 
      style={{"width":"100%","height":"100%","maxWidth":"270px","marginLeft":"auto","marginRight":"auto","background":"transparent"}}
    />

                </div>
                <div class="col-md-2 bord-right center_sec no_padd_col center_sec_image">
                    <div class="home_center_img">
                        <div
                            style={{background:"url(assets/images/home-center-im.jpg) no-repeat",backgroundSize:"cover",height:"100%"}}>
                        </div>
                    </div>

                    <div class="text-div text-div-cent">
                        <p>Create mobile apps, websites and other digital products that connect with users in relevant
                            and meaningful ways.</p>
                        <h2 class="desk-h2">ONLINE COURSE <br />
                            25 WEEKS<br />
                            LIVE LECTURE <br />
                            PLACEMENT SUPPORT</h2>
                        <h2 class="mob-h2">Online | 25 weeks | Live lecture | Placement support</h2>

                    </div>


                </div>
                <div class="col-md-5 mob_padding_no desk_padding_right_0 right_last_sec">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="text-div">

                                <h3>Application Deadline: 31.12.2021</h3>
                            </div>


                        </div>
                        <div class="col-md-7">
                            <div class="home_right_img">
                                <div
                                     style={{background:"url(assets/images/21x.webp) no-repeat", backgroundSize:"cover", height:"100%",backgroundPosition: "center"}}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="download_broch"   onClick={showModal}>DOWNLOAD BROCHURE</a>

                    <Lottie
      loop
      animationData={ArrowJson}
      play pause={1000} speed={1} 
      style={{"width":"50px","height":"50x","position":"relative","top":"4px"}}
    />

                </div>
            </div>
            </div>
    </section>
    <section class="course-title">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h2>Course highlights </h2>
                </div>
            </div>
        </div>
    </section>

    <section class="course-section course-animate">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <div class="classes_div cl_dv_1">
                        <h3>Live online<br />
                            classes</h3>
                        <p>25-week intensive cohort-based learning (6 hrs/week) </p>
                    </div>
                    <div class="classes_div cl_dv_2">
                        <h3>Learn from <br />
                            practitioners</h3>
                        <p>Leading faculty and industry experts from India and world over</p>
                    </div>
                    <div class="classes_div cl_dv_3">
                        <h3>Career<br />
                            enhancement</h3>
                        <p>Guaranteed placement assistance from a dedicated careers division</p>
                    </div>
                    <div class="classes_div cl_dv_4">
                        <h3>Professional <br />
                            networking</h3>
                        <p>Build a network of design professionals and make lifelong connections</p>
                    </div>
                    <div class="classes_div mob_img">
                        <img class="" src="assets/images/course-img-3.jpg" alt="" />
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="first_course_img">
                        <div
                          style={{background:"url(assets/images/course-imag-1.jpg) no-repeat", backgroundSize:"cover", height:"100%"}}  >
                        </div>
                    </div>

                </div>
                <div class="col-md-3">
                    <div class="last_course_img">
                        <div
                            style={{background:"url(assets/images/course-imag-2.jpg) no-repeat", backgroundSize:"cover", height:"100%"}} >
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <section class="future_title">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h2>Future job roles </h2>
                </div>
            </div>
        </div>
    </section>
    <section class="future_sec mob_hid future-animate" data-aos="slide-up">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="max_widt">
                        <div class="future_div">
                            <div class="all_full">
                                <div
                                   style={{background:"url(assets/images/futuer-job-full-1.jpg) no-repeat", backgroundSize:"cover", height:"100%", width:"100%"}}  >
                                </div>
                            </div>
                        </div>
                        <div class="future_div">
                            <div class="upper_half">
                                <p>UX / UI <br /> Designer</p>
                            </div>
                            <div class="lower_half">
                                UI <br /> Developer
                            </div>
                        </div>
                        <div class="future_div">
                            <div class="upper_half">

                                <div
                                   style={{background:"url(assets/images/futuer-job-half-1.jpg) no-repeat", backgroundSize:"cover", height:"100%", width:"100%"}} >
                                </div>
                            </div>
                            <div class="lower_half">

                            </div>
                        </div>


                        <div class="future_div">
                            <div class="upper_half">
                                UX <br /> Researcher
                            </div>
                            <div class="lower_half">
                                Product <br /> Designer
                            </div>
                        </div>
                        <div class="future_div">
                            <div class="all_full">
                                <div
                                    style={{background:"url(assets/images/futuer-job-full-2.jpg) no-repeat", backgroundSize:"cover", height:"100%", width:"100%"}} >
                                </div>

                            </div>
                        </div>
                        <div class="future_div">
                            <div class="upper_half">
                                Information <br /> Architect
                            </div>
                            <div class="lower_half">

                            </div>
                        </div>
                        <div class="future_div last_future_div">
                            <div class="upper_half">
                                <div
                                  style={{background:"url(assets/images/futuer-job-full-landscap.jpg) no-repeat", backgroundSize:"cover", height:"100%", width:"100%"}}  >
                                </div>
                            </div>
                            <div class="lower_half">
                                Interaction <br /> Designer
                            </div>
                            <div class="lower_half">

                            </div>
                        </div>



                    </div>

                </div>
            </div>
        </div>
    </section>
    <section class="future_sec desk_hid animation-element">
        <div class="future_div">
            <div class="upper_half">
                <p>UX / UI <br /> Designer</p>
            </div>
            <div class="lower_half">
                UX <br /> Researcher
            </div>
        </div>
        <div class="future_div">
            <div class="upper_half">
                UI <br /> Developer
            </div>
            <div class="lower_half">
                Product <br /> Designer
            </div>
        </div>
        <div class="future_div">
            <div class="all_full">
                <div
                  style={{background:"url(assets/images/futuer-job-half-1.jpg) no-repeat", backgroundSize:"cover", height:"100%", width:"100%"}}   >
                </div>
            </div>
        </div>

        <div class="future_div">
            <div class="upper_half">
                <div
                   style={{background:"url(assets/images/futuer-job-full-landscap.jpg) no-repeat", backgroundSize:"cover", height:"100%", width:"100%"}} >
                </div>
            </div>
        </div>
        <div class="future_div last_future_div">
            <div class="upper_half">
                Interaction <br /> Designer
            </div>
            <div class="lower_half">
                Information <br /> Architect
            </div>
        </div>











    </section>

    <section class="course-structure-title">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h2>Course structure</h2>
                    <p>Create seamless user experiences by combining the knowledge of research, product development,
                        strategy and design, to create mobile apps, websites, and other digital products. </p>
                    <h3>25 weeks course structure</h3>
                </div>
            </div>
            <div class="row number_row">
                <div class="col-md-2 mobile_first">
                    <div class="first_div">
                        <div class="number_div">
                            1
                        </div>
                        <div class="below_box">
                            <h4>Introductory session</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 desk_first">
                    <div class="first_div only_first">
                        <div class="number_div">
                            1
                        </div>
                        <div class="number_div">
                            2
                        </div>
                        <div class="number_div">
                            3
                        </div>
                        <div class="number_div">
                            4
                        </div>
                        <div class="number_div">
                            5
                        </div>
                        <div class="below_box">
                            <h4>Visual Language</h4>
                            <ul>
                                <li>Introductory session</li>
                                <li>Elements of Design</li>
                                <li>Colour & Composition</li>
                                <li>Design Process</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="first_div second_div">

                        <div class="number_div">
                            6
                        </div>
                        <div class="number_div">
                            7
                        </div>
                        <div class="number_div">
                            8
                        </div>
                        <div class="number_div">
                            9
                        </div>
                        <div class="below_box">
                            <h4>Elements of UX</h4>
                            <ul>
                                <li>UX process</li>
                                <li>User needs</li>
                                <li>Business goals</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="first_div third_div">

                        <div class="number_div">
                            10
                        </div>
                        <div class="number_div">
                            11
                        </div>
                        <div class="number_div">
                            12
                        </div>
                        <div class="number_div">
                            13
                        </div>
                        <div class="below_box">
                            <h4>Scope and Structure</h4>
                            <ul>
                                <li>Feature functionality</li>
                                <li>Information architecture</li>
                                <li>Interaction design</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="first_div fourth_div">

                        <div class="number_div">
                            14
                        </div>
                        <div class="number_div">
                            15
                        </div>
                        <div class="number_div">
                            16
                        </div>
                        <div class="number_div">
                            17
                        </div>
                        <div class="below_box">
                            <h4>Skeleton and Surface</h4>
                            <ul>
                                <li>Navigation Design</li>
                                <li>Interface Design</li>
                                <li>Information Design</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="first_div fifth_div">

                        <div class="number_div">
                            18
                        </div>
                        <div class="number_div">
                            19
                        </div>
                        <div class="number_div">
                            20
                        </div>
                        <div class="number_div">
                            21
                        </div>
                        <div class="below_box">
                            <h4>Design Sprint</h4>
                            <ul>
                                <li>User onboarding</li>
                                <li>Page types</li>
                                <li>Dashboard design</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="first_div sixth_div">

                        <div class="number_div">
                            22
                        </div>
                        <div class="number_div">
                            23
                        </div>
                        <div class="number_div">
                            24
                        </div>
                        <div class="number_div">
                            25
                        </div>
                        <div class="below_box">
                            <h4>Design System Project</h4>
                            <ul>
                                <li>Content hub</li>
                                <li>Online store</li>
                                <li>Mobile app</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <a data-toggle="modal" data-target="#myModal" href="#" class="download_curri">DOWNLOAD CURRICULUM
                      
                       
                    </a>
                </div>
            </div>
        </div>
        
    </section>

    <section class="software-traing">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <h2>Software & tools </h2>
                </div>
                <div class="col-md-3">
                    <p>Adobe XD<br />
                        Figma<br />
                        Sketch<br />
                        Zeplin</p>
                </div>
                <div class="col-md-3">
                    <div
                        style={{"background":"url(assets/images/software-training.jpg) no-repeat","backgroundSize":"cover","height":"100%"}}>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="eligibilty-crite">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <h2>Eligibility criteria </h2>
                    <p>The programme is designed for people with a passion for learning to design functional and
                        engaging products. If you have prior exposure in design, that’s even better. </p>
                </div>
                <div class="col-md-6">
                    <h3>Looking for a comprehensive Visual Communication programme?</h3>
                    <p>Apply for our 1 year PG Diploma program in Communications Design with specialisation in User
                        Experience (UX/UI), Motion Graphics and Digital Brand Communication. Open to graduates from any
                        field. </p>
                    <a href="#"><img class="tick_img" height="44" src="assets/images/tick_icon_black.svg" alt="" /></a>
                </div>
                <div class="eligiblity_img">
                <div class="cent_back_img" style={{"background":"url(assets/images/no-prior-img.jpg) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
                </div>
			
		</div>
	</div>
</section>

<section class=" not-sure">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                    <h2>Not sure about which <br />
                                        programme to pick ?</h2>
                                    <a data-toggle="modal" data-target="#myModal" href="#">CONSULT CAREER ADVISORS
                                       
                                        
                                    </a>
                                </div>
                            </div>
                        </div>
    </section>
    <section class="explore-more">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h2>Explore more specialisation courses </h2>
                </div>
            </div>
        </div>
    </section>
    <section class="digital-brand-sec yellow_sec">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8">
                    <a class="anchor_whole" href="#"><span></span>
                        <h6>Intermediate Level </h6>
                        <h5>Motion Graphics Diploma</h5>
                        <p>Bring new life to static images with a course in motion graphics using animation and visual
                            effects.
                            <img class="tick_img" height="44" src="assets/images/tick_icon.svg" alt="" />
                        </p>



                    </a>
                </div>
                <div class="col-md-4">
                    <div class="cent_back_img"
                        style={{"background":"url(assets/images/motion_below_box.webp) no-repeat","backgroundSize":"cover","height":"100%"}}>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="digital-brand-sec">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                    <div class="cent_back_img"
                        style={{"background":"url(assets/images/graphic_below_box.webp) no-repeat","backgroundSize":"cover","height":"100%"}}>
                    </div>

                </div>
                <div class="col-md-8 yellow_div">
                    <a class="anchor_whole" href="#">
                        <h6>Beginner Level </h6>
                        <h5>Graphic Design Diploma</h5>
                        <p>Master the fundamentals of graphic design, from colour theory, composition and typography to
                            creative applications and design processes.

                            <img class="tick_img" height="44" src="assets/images/tick_icon_red.svg" alt="" />
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="digital-brand-sec black_sec">
        <div class="container-fluid">
            <div class="row">

                <div class="col-md-8">
                    <a class="anchor_whole" href="#">
                        <h6>Intermediate Level </h6>
                        <h5>Digital Brand Communication Diploma</h5>
                        <p>Learn to ideate, design, and promote your brand messaging through visual communication across
                            various digital platforms.
                            <img class="tick_img" height="44" src="assets/images/tick_icon_red.svg" alt="" />
                        </p>
                    </a>

                </div>
                <div class="col-md-4">
                    <div class="cent_back_img"
                        style={{"background":"url(assets/images/digital_below_box.webp) no-repeat","backgroundSize":"cover","height":"100%"}}>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="digital-brand-sec blue_sec">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                    <div class="cent_back_img"
                        style={{"background":"url(assets/images/digital_below_box.webp) no-repeat","backgroundSize":"cover","height":"100%"}}>
                    </div>
                </div>
                <div class="col-md-8 blue_div">
                    <a class="anchor_whole" href="#">
                        <h6>beginner Level </h6>
                        <h5>Interior Design Diploma</h5>
                        <p>Design and build functionally aesthetic residential and commercial spaces.
                            <img class="tick_img" height="44" src="assets/images/tick_icon_black.svg" alt="" />
                        </p>
                    </a>

                </div>

            </div>
        </div>
    </section>
    <footer>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    Copyright 2021 AND Academy | All Rights Reserved
                </div>
            </div>
        </div>
    </footer>

    <Modal show={modalInput} onHide={hideModal}  class="modal fade brochure_box" >
      <Modal.Header className='modal-content'><button type="button" class="close" data-dismiss="modal"><img src="assets/images/cross_popup.svg"
                        alt="" /></button></Modal.Header>
      <Modal.Body>
      <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-2">
                            <img src="images/white-logo.svg" alt="" />
                        </div>
                        <div class="col-md-10">
                            <p id="msgTxt" class="text-nowrap text-center"></p>
                        </div>
                        <div class="col-md-2 bord_bottom_broch">
                        </div>
                        <div class="col-md-10 bord_bottom_broch">
                            <form name="myForm" id="myForm" method="post">
                                <input type="text" name="name" id="name" class="msg" placeholder="NAME" />

                                <input type="email" name="email" id="email" class="msg" placeholder="E-MAIL" />
                                <div class="custom-select" id='course_cnt'>
                                    <select name="course" id="course" class="msg">
                                        <option value="">SELECT COURSE</option>
                                        <option value="COMMUNICATION DESIGN : PG DIPLOMA">COMMUNICATION DESIGN : PG
                                            DIPLOMA</option>
                                        <option value="MOTION GRAPHICS">MOTION GRAPHICS</option>
                                        <option value="USER EXPERIENCE">USER EXPERIENCE </option>
                                        <option value="DIGITAL BRAND COMMUNICATION">DIGITAL BRAND COMMUNICATION</option>
                                        <option value="GRAPHIC DESIGN">GRAPHIC DESIGN</option>
                                        <option value="INTERIOR DESIGN">INTERIOR DESIGN</option>
                                    </select>
                                </div>
                                <div class="custom-select" id='exp'>
                                    <select name="experience" id="experience" class="msg">
                                        <option value="">SELECT EXPERIENCE</option>
                                        <option value="UG Student">UG Student</option>
                                        <option value="UG Student (Final Year)">UG Student (Final Year)</option>
                                        <option value="PG Student">PG Student</option>
                                        <option value="0 Year Work Experience">0 Year Work Experience</option>
                                        <option value="1-2 Years Work Experience">1-2 Years Work Experience</option>
                                        <option value="2-4 Years Work Experience">2-4 Years Work Experience</option>
                                        <option value="4+ Years Work Experience">4+ Years Work Experience</option>
                                    </select>
                                </div>
                                <div class="phone_div">
                                    <div class="custom-select">
                                        <select>
                                            <option>+91</option>
                                            <option>+91</option>
                                            <option>+00</option>
                                            <option>+00</option>
                                            <option>+00</option>
                                            <option>+00</option>
                                        </select>
                                    </div>
                                    <input type="tel" name="mobile" id="mobile" class="msg"
                                        placeholder="ENTER MOBILE NO."
                                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                                        maxlength="10" />

                                </div>
                                <input type="text" name="otp" id="otp" class="msg" placeholder="ENTER  OTP"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                                    maxlength="6" />
                                <input type="submit" value="SUBMIT" />
                            </form>
                        </div>
                    </div>


                </div>
      </Modal.Body>
      <Modal.Footer>This is the footer <button onClick={hideModal}>Cancel</button></Modal.Footer>
    </Modal>
   
        </>
    )
}

export default User
