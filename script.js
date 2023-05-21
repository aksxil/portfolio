function valueSetters() {
    gsap.set("#nav a", {
        y: "-100%",
        opacity: 0
    })
    gsap.set("#home span .child", {
        y: "100%"
    })
    gsap.set("#home .row img", {
        opacity: 0
    })

    document.querySelectorAll("#Visual>g").forEach(function (e) {
        var character = e.childNodes[1].childNodes[1];
        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
    })
}
function revealToSpan() {
    document.querySelectorAll(".reveal")
        .forEach(function (elem) {
            var parent = document.createElement("span");
            var child = document.createElement("span");

            parent.classList.add("parent");
            child.classList.add("child")

            child.innerHTML = elem.innerHTML;
            parent.appendChild(child);

            elem.innerHTML = "";
            elem.appendChild(parent);
        });
}
function loaderAnim() {
    var tl = gsap.timeline();

    tl.from("#loader .child span", {
        x: 100,
        delay: 1,
        stagger: .2,
        duration: 1.4,
        ease: Circ.easeInOut
    })

    tl.to("#loader .parent .child", {
        y: "-100%",
        duration: 1,
        delay: 1,
        ease: Circ.easeInOut
    })
    tl.to("#loader", {
        height: 0,
        duration: 1,
        ease: Circ.easeInOut
    })
    tl.to("#green", {
        height: "100%",
        top: 0,
        duration: 1,
        delay: -.8,
        ease: Circ.easeInOut
    })
    tl.to("#green", {
        height: "0%",
        duration: 1,
        delay: -.5,
        ease: Circ.easeInOut,
        onComplete: function () {
            animateHomepage();
        }
    })


}
function animateHomepage() {

    var tl = gsap.timeline();

    tl.to("#nav a", {
        y: 0,
        opacity: 1,
        stagger: .05,
        ease: Expo.easeInOut
    })
    tl.to("#home .parent .child ", {
        y: 0,
        stagger: .1,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    tl.to("#home .row img ", {
        opacity: 1,
        delay: -.5,
        ease: Expo.easeInOut,
        onComplete: function () {
            animateSvg();
        }
    })
}
function animateSvg() {

    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: Expo.easeInOut,

    })
}

function locoin() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

function cardShow() {
    document.querySelectorAll(".cnt, .aks")
        .forEach(function (cnt) {
            var showingaImage;
            cnt.addEventListener("mousemove", function (dets) {
                console.log();
                document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
                showingaImage = dets.target;
                showingaImage.style.filter = "grayscale(90%)"
                document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
                document.querySelector("#page2").style.backgroundColor = "#" + dets.target.dataset.color;
            })

            cnt.addEventListener("mouseleave", function (dets) {
                console.log();
                document.querySelector("#cursor").children[showingaImage.dataset.index].style.opacity = 0;
                showingaImage.style.filter = "grayscale(0)"
                document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
                document.querySelector("#page2").style.backgroundColor = "#F2F2F2";
            })
        })
}

revealToSpan();
valueSetters()
loaderAnim();
locoin();
cardShow();




