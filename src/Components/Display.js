import React from "react";
import "../Style/Display.css"

export default function Display() {
    let slideIndex = 1;

    const plusSlides=(n)=> {
        showSlides(slideIndex += n);
    }

    const currentSlide=(n)=> {
        showSlides(slideIndex = n);
    }

    const showSlides=(n)=> {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    return (
        <div className="DisplayWrap">
            <span className="active">Category Name</span>
            <div class="slideshow-container">
                <div class="mySlides">
                    <q>I’m dishonest, and a dishonest man you can always trust to be dishonest. Honestly. It’s the honest ones you want to watch out for, because you can never predict when they’re going to do something incredibly … stupid</q>
                    <p class="author">- Catain Jack Sparrow</p>
                </div>
                <div class="mySlides">
                    <q>I mean that for nearly three thousand years man has been searching for the lost Ark. It’s not something to be taken lightly. No one knows its secrets. It’s like nothing you’ve ever gone after before</q>
                    <p class="author">- Indiana Jones</p>
                </div>
                <div class="mySlides">
                    <q>I don't trust society to protect us, I have no intention of placing my fate in the hands of men whose only qualification is that they managed to con a block of people to vote for them</q>
                    <p class="author">-  Mario Puzo, The Godfather</p>
                </div>
                <div class="mySlides">
                    <q>What Is the Point If Those With The Means And Power Do Not Fight?</q>
                    <p class="author">- Eren Yeager</p>
                </div>
                <a class="prev" onClick={()=>plusSlides(-1)}>&#10094;</a>
                <a class="next" onClick={()=>plusSlides(1)}>&#10095;</a>
            </div>
        </div>
    )
}

