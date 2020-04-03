import {AfterViewInit, Component, OnInit} from '@angular/core';
import { TimelineMax } from 'gsap';
@Component({
    selector: 'yeti-login',
    templateUrl: './yeti-login.component.html',
    styleUrls: ['./yeti-login.component.scss']
})
export class YetiLoginComponent implements OnInit, AfterViewInit {


    eyeMaxHorizD = 20
    eyeMaxVertD = 10
    noseMaxHorizD = 23
    noseMaxVertD = 10
    mouthStatus = "small";
    private email: Element | null;

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.email = document.querySelector('#email');

        this.password = document.querySelector('#password');
        this.mySVG = document.querySelector('.svgContainer');
        this.armL = document.querySelector('.armL');
        this.armR = document.querySelector('.armR');
        this.eyeL = document.querySelector('.eyeL');
        this.eyeR = document.querySelector('.eyeR');
        this.nose = document.querySelector('.nose');
        this.mouth = document.querySelector('.mouth');
        this.mouthBG = document.querySelector('.mouthBG');
        this.mouthSmallBG = document.querySelector('.mouthSmallBG');
        this.mouthMediumBG = document.querySelector('.mouthMediumBG');
        this.mouthLargeBG = document.querySelector('.mouthLargeBG');
        this.mouthMaskPath = document.querySelector('#mouthMaskPath');
        this.mouthOutline = document.querySelector('.mouthOutline');
        this.tooth = document.querySelector('.tooth');
        this.tongue = document.querySelector('.tongue');
        this.chin = document.querySelector('.chin');
        this.face = document.querySelector('.face');
        this.eyebrow = document.querySelector('.eyebrow');
        this.outerEarL = document.querySelector('.earL .outerEar');
        this.outerEarR = document.querySelector('.earR .outerEar');
        this.earHairL = document.querySelector('.earL .earHair');
        this.earHairR = document.querySelector('.earR .earHair');
        this.hair = document.querySelector('.hair');

        this.email.addEventListener('focus', (e) => this.onEmailFocus(e));
        this.email.addEventListener('blur', (e) =>  this.onEmailBlur(e));
        this.email.addEventListener('input', (e) => this.onEmailInput(e));
        this.password.addEventListener('focus',  (e) => this.onPasswordFocus(e));
        this.password.addEventListener('blur', (e) => this.onPasswordBlur(e));
        const menu = new TimelineMax({x: -93, y: 220, rotation: 105, transformOrigin: "top left"});

        menu.set(this.armL,  {rotation:'105', transformOrigin:"top left"})
        menu.set(this.armR, {rotation: -105, transformOrigin: "top right"});
    }

    getCoord(e) {
        let carPos = this.email.selectionEnd,
            div = document.createElement('div'),
            span = document.createElement('span'),
            copyStyle = getComputedStyle(email),
            emailCoords = {}, caretCoords = {}, centerCoords = {}
        ;
        [].forEach.call(copyStyle, function (prop) {
            div.style[prop] = copyStyle[prop];
        });
        div.style.position = 'absolute';
        document.body.appendChild(div);
        div.textContent = this.email.value.substr(0, carPos);
        span.textContent = this.email.value.substr(carPos) || '.';
        div.appendChild(span);

         emailCoords = this.getPosition(this.email);							//console.log("emailCoords.x: " + emailCoords.x + ", emailCoords.y: " + emailCoords.y);
         caretCoords = this.getPosition(span);							//console.log("caretCoords.x " + caretCoords.x + ", caretCoords.y: " + caretCoords.y);
         centerCoords = this.getPosition(this.mySVG);							//console.log("centerCoords.x: " + centerCoords.x);
        let svgCoords = this.getPosition(this.mySVG);
        let screenCenter = centerCoords.x + (this.mySVG.offsetWidth / 2);		//console.log("screenCenter: " + screenCenter);
        let caretPos = caretCoords.x + emailCoords.x;					//console.log("caretPos: " + caretPos);

        let dFromC = screenCenter - caretPos; 							//console.log("dFromC: " + dFromC);
        let pFromC = Math.round((caretPos / screenCenter) * 100) / 100;
        if (pFromC < 1) {

        } else if (pFromC > 1) {
            pFromC -= 2;
            pFromC = Math.abs(pFromC);
        }

        let eyeDistH = -dFromC * .05;
        if (eyeDistH > this.eyeMaxHorizD) {
            eyeDistH = this.eyeMaxHorizD;
        } else if (eyeDistH < -this.eyeMaxHorizD) {
            eyeDistH = -this.eyeMaxHorizD;
        }

        const eyeLCoords = {x: svgCoords.x + 84, y: svgCoords.y + 76};
        const eyeRCoords = {x: svgCoords.x + 113, y: svgCoords.y + 76};
        const noseCoords = {x: svgCoords.x + 97, y: svgCoords.y + 81};
        const mouthCoords = {x: svgCoords.x + 100, y: svgCoords.y + 100};
        const eyeLAngle = this.getAngle(eyeLCoords.x, eyeLCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
        const eyeLX = Math.cos(eyeLAngle) * this.eyeMaxHorizD;
        const eyeLY = Math.sin(eyeLAngle) * this.eyeMaxVertD;
        const eyeRAngle = this.getAngle(eyeRCoords.x, eyeRCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
        const eyeRX = Math.cos(eyeRAngle) * this.eyeMaxHorizD;
        const eyeRY = Math.sin(eyeRAngle) * this.eyeMaxVertD;
        const noseAngle = this.getAngle(noseCoords.x, noseCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
        const noseX = Math.cos(noseAngle) * this.noseMaxHorizD;
        const noseY = Math.sin(noseAngle) * this.noseMaxVertD;
        const mouthAngle = this.getAngle(mouthCoords.x, mouthCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
        const mouthX = Math.cos(mouthAngle) * this.noseMaxHorizD;
        const mouthY = Math.sin(mouthAngle) * this.noseMaxVertD;
        const mouthR = Math.cos(mouthAngle) * 6;
        const chinX = mouthX * .8;
        const chinY = mouthY * .5;
        let chinS = 1 - ((dFromC * .15) / 100);
        if (chinS > 1) {
            chinS = 1 - (chinS - 1);
        }
        const faceX = mouthX * .3;
        const faceY = mouthY * .4;
        const faceSkew = Math.cos(mouthAngle) * 5;
        const eyebrowSkew = Math.cos(mouthAngle) * 25;
        const outerEarX = Math.cos(mouthAngle) * 4;
        const outerEarY = Math.cos(mouthAngle) * 5;
        const hairX = Math.cos(mouthAngle) * 6;
        const hairS = 1.2;
        const menu = new TimelineMax();
        menu.to(this.eyeL, 1, {x: -eyeLX, y: -eyeLY, ease: Expo.easeOut});
        menu.to(this.eyeR, 1, {x: -eyeRX, y: -eyeRY, ease: Expo.easeOut});
        menu.to(this.nose, 1, {
            x: -noseX,
            y: -noseY,
            rotation: mouthR,
            transformOrigin: "center center",
            ease: Expo.easeOut
        });
        menu.to(this.mouth, 1, {
            x: -mouthX,
            y: -mouthY,
            rotation: mouthR,
            transformOrigin: "center center",
            ease: Expo.easeOut
        });
        menu.to(this.chin, 1, {x: -chinX, y: -chinY, scaleY: chinS, ease: Expo.easeOut});
        menu.to(this.face, 1, {
            x: -faceX,
            y: -faceY,
            skewX: -faceSkew,
            transformOrigin: "center top",
            ease: Expo.easeOut
        });
        menu.to(this.eyebrow, 1, {
            x: -faceX,
            y: -faceY,
            skewX: -eyebrowSkew,
            transformOrigin: "center top",
            ease: Expo.easeOut
        });
        menu.to(this.outerEarL, 1, {x: outerEarX, y: -outerEarY, ease: Expo.easeOut});
        menu.to(this.outerEarR, 1, {x: outerEarX, y: outerEarY, ease: Expo.easeOut});
        menu.to(this.earHairL, 1, {x: -outerEarX, y: -outerEarY, ease: Expo.easeOut});
        menu.to(this.earHairR, 1, {x: -outerEarX, y: outerEarY, ease: Expo.easeOut});
        menu.to(this.hair, 1, {x: hairX, scaleY: hairS, transformOrigin: "center bottom", ease: Expo.easeOut});

        document.body.removeChild(div);
    };

    onEmailInput(e) {
        this.getCoord(e);
        const menu = new TimelineMax();
        const value = e.target.value;
        const curEmailIndex = value.length;

        // very crude email validation for now to trigger effects
        if (curEmailIndex > 0) {
            if (this.mouthStatus == "small") {
                this.mouthStatus = "medium";
                menu.to([this.mouthBG, this.mouthOutline, this.mouthMaskPath], 1, {
                    morphSVG: this.mouthMediumBG,
                    shapeIndex: 8,
                    ease: Expo.easeOut
                });
                menu.to(this.tooth, 1, {x: 0, y: 0, ease: Expo.easeOut});
                menu.to(this.tongue, 1, {x: 0, y: 1, ease: Expo.easeOut});
                menu.to([this.eyeL, this.eyeR], 1, {scaleX: .85, scaleY: .85, ease: Expo.easeOut});
            }
            if (value.includes("@")) {
                this.mouthStatus = "large";
                menu.to([this.mouthBG, this.mouthOutline, this.mouthMaskPath], 1, {morphSVG: this.mouthLargeBG, ease: Expo.easeOut});
                menu.to(this.tooth, 1, {x: 3, y: -2, ease: Expo.easeOut});
                menu.to(this.tongue, 1, {y: 2, ease: Expo.easeOut});
                menu.to([this.eyeL, this.eyeR], 1, {
                    scaleX: .65,
                    scaleY: .65,
                    ease: Expo.easeOut,
                    transformOrigin: "center center"
                });
            } else {
                this.mouthStatus = "medium";
                menu.to([this.mouthBG, this.mouthOutline, this.mouthMaskPath], 1, {morphSVG: this.mouthMediumBG, ease: Expo.easeOut});
                menu.to(this.tooth, 1, {x: 0, y: 0, ease: Expo.easeOut});
                menu.to(this.tongue, 1, {x: 0, y: 1, ease: Expo.easeOut});
                menu.to([this.eyeL, this.eyeR], 1, {scaleX: .85, scaleY: .85, ease: Expo.easeOut});
            }
        } else {
            this.mouthStatus = "small";
            menu.to([this.mouthBG, this.mouthOutline, this.mouthMaskPath], 1, {
                morphSVG: this.mouthSmallBG,
                shapeIndex: 9,
                ease: Expo.easeOut
            });
            menu.to(this.tooth, 1, {x: 0, y: 0, ease: Expo.easeOut});
            menu.to(this.tongue, 1, {y: 0, ease: Expo.easeOut});
            menu.to([this.eyeL, this.eyeR], 1, {scaleX: 1, scaleY: 1, ease: Expo.easeOut});
        }
    }

    onEmailFocus(e) {
        e.target.parentElement.classList.add("focusWithText");
        this.getCoord(e);
    }

    onEmailBlur(e) {
        if (e.target.value == "") {
            e.target.parentElement.classList.remove("focusWithText");
        }
        this.resetFace();
    }

    onPasswordFocus(e) {
        this.coverEyes();
    }

    onPasswordBlur(e) {
        this.uncoverEyes();
    }

    coverEyes() {
        const menu = new TimelineMax();
        menu.to(this.armL, .45, {x: -93, y: 2, rotation: 0, ease: Quad.easeOut});
        menu.to(this.armR, .45, {x: -93, y: 2, rotation: 0, ease: Quad.easeOut, delay: .1});
    }

    uncoverEyes() {
        const menu = new TimelineMax();
        menu.to(this.armL, 1.35, {y: 220, ease: Quad.easeOut});
        menu.to(this.armL, 1.35, {rotation: 105, ease: Quad.easeOut, delay: .1});
        menu.to(this.armR, 1.35, {y: 220, ease: Quad.easeOut});
        menu.to(this.armR, 1.35, {rotation: -105, ease: Quad.easeOut, delay: .1});
    }

    resetFace() {
        const menu = new TimelineMax();
        menu.to([this.eyeL, this.eyeR], 1, {x: 0, y: 0, ease: Expo.easeOut});
        menu.to(this.nose, 1, {x: 0, y: 0, scaleX: 1, scaleY: 1, ease: Expo.easeOut});
        menu.to(this.mouth, 1, {x: 0, y: 0, rotation: 0, ease: Expo.easeOut});
        menu.to(this.chin, 1, {x: 0, y: 0, scaleY: 1, ease: Expo.easeOut});
        menu.to([this.face, this.eyebrow], 1, {x: 0, y: 0, skewX: 0, ease: Expo.easeOut});
        menu.to([this.outerEarL, this.outerEarR, this.earHairL, this.earHairR, this.hair], 1, {x: 0, y: 0, scaleY: 1, ease: Expo.easeOut});
    }

    getAngle(x1, y1, x2, y2) {
        const angle = Math.atan2(y1 - y2, x1 - x2);
        return angle;
    }

    getPosition(el) {
        let xPos = 0;
        let yPos = 0;

        while (el) {
            if (el.tagName == "BODY") {
                // deal with browser quirks with body/window/document and page scroll
                const xScroll = el.scrollLeft || document.documentElement.scrollLeft;
                const yScroll = el.scrollTop || document.documentElement.scrollTop;

                xPos += (el.offsetLeft - xScroll + el.clientLeft);
                yPos += (el.offsetTop - yScroll + el.clientTop);
            } else {
                // for all other non-BODY elements
                xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
                yPos += (el.offsetTop - el.scrollTop + el.clientTop);
            }

            el = el.offsetParent;
        }
        return {
            x: xPos,
            y: yPos
        };
    }

}
