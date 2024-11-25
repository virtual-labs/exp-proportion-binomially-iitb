function activity2_p3() {
    let btn = (document.getElementById('act2-p2-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Confidence Interval', 'act2-ci-div');
    a2_internal_calculation_2();
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide fs-16px" id="act2-ci-div">
         <h4 class="fs-16px fb-700" style="text-align:left;">
            The Confidence Interval:
         </h4>
         <br>
         <p>
            Now we will determine the confidence interval:
            <br>
            But we need to find Standard error furthermore Margin of errors
         </p>
         <div id="act2-se-div" class="center-text">
            <div class="row justify-content-center" style="align-items:center;">
               <div class="col-lg-4">
                  $$ SE = \\sqrt{\\frac{p\̂ _2\(1-p\̂ _2\)}{n_2}} =  $$
               </div>
               <div class="col-lg-4">
                  <input type='number' id='se2-inp' class='form-control fs-16px' />
               </div>
            </div>
            <button class='btn btn-info std-btn' onclick='verify_se2();' style='position: relative; left: 0w;' id='vf-se2-btn'>Verify</button>
         </div>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-ci-div');
    }, 150);
}
function a2_internal_calculation_2() {
    SE_a2 = 0;
    ME_a2 = 0;
    CI_1_a2 = 0;
    CI_2_a2 = 0;
    SE_a2 = parseFloat(Math.sqrt((p2_cap * (1 - p2_cap)) / n2).toFixed(3));
    ME_a2 = parseFloat((z2 * SE_a2).toFixed(3));
    CI_1_a2 = parseFloat((p2_cap - ME_a2).toFixed(3));
    CI_2_a2 = parseFloat((p2_cap + ME_a2).toFixed(3));
}
function verify_se2() {
    let se_inp = (document.getElementById('se2-inp'));
    console.log(SE_a2);
    if (!verify_values(parseFloat(se_inp.value), SE_a2)) {
        se_inp.style.border = '1px solid red';
        alert('Incorrect SE value');
        return;
    }
    else {
        se_inp.style.border = '1px solid #ced4da';
        se_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-se-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         $$ SE = \\sqrt{\\frac{p\̂ _2(1-p\̂ _2)}{n_2}} = ${SE_a2} $$
      </div>
      <button class='btn btn-info std-btn' onclick='a2_load_me_div();' style='position: relative; left: 0w;' id='act2-p3-btn-1'>Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function a2_load_me_div() {
    let btn = (document.getElementById('act2-p3-btn-1'));
    btn && btn.remove();
    let div = (document.getElementById('act2-ci-div'));
    div.innerHTML += `
   <br>
   <p>
      Now Margin of Errors
   </p>
   <div id="act2-me-div" class="center-text">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-lg-4">
            $$ ME = z_{20} \× SE =  $$
         </div>
         <div class="col-lg-4">
            <input type='number' id='me2-inp' class='form-control fs-16px' />
         </div>
      </div>
      <button class='btn btn-info std-btn' onclick='verify_me2();' style='position: relative; left: 0w;' id='vf-me2-btn'>Verify</button>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function verify_me2() {
    let me_inp = (document.getElementById('me2-inp'));
    console.log(ME_a2);
    if (!verify_values(parseFloat(me_inp.value), ME_a2)) {
        me_inp.style.border = '1px solid red';
        alert('Incorrect ME value');
        return;
    }
    else {
        me_inp.style.border = '1px solid #ced4da';
        me_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-me-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
      $$ ME = z_{20} \× SE = ${ME_a2} $$
      </div>
      <button class='btn btn-info std-btn' onclick='a2_load_ci_div();' style='position: relative; left: 0w;' id='act2-p3-btn-2'>Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function a2_load_ci_div() {
    let btn = (document.getElementById('act2-p3-btn-2'));
    btn && btn.remove();
    let div = (document.getElementById('act2-ci-div'));
    div.innerHTML += `
   <br>
   <div>
      We have,
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-lg-4">
            $$ p\̂ _2 = ${p2_cap} $$
         </div>
         <div class="col-lg-4">
            $$ ME = z_{20} \× SE = ${ME_a2} $$
         </div>
      </div>
      <div>
         So confidence interval is,
         $$ CI = (p\̂ _2 - ME , p\̂ _2 + ME) $$
      </div>
      <div id="ci2-div" class="center-text">
         <div class="row justify-content-center" style="align-items:center;" >
            <div class="col-lg-4">
               $$ p\̂ _2 - ME =  $$
            </div>
            <div class="col-lg-4">
               <input type='number' id='act2-ci1-inp' class='form-control fs-16px' />
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;" >
            <div class="col-lg-4">
               $$ p\̂ _2 + ME =  $$
            </div>
            <div class="col-lg-4">
               <input type='number' id='act2-ci2-inp' class='form-control fs-16px' />
            </div>
         </div>
         
         <br>

         <button class='btn btn-info std-btn' onclick='verify_ci2();' style='position: relative; left: 0w;' id='vf-ci2-btn'>Verify</button>
      </div>

   </div>
      
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function verify_ci2() {
    let ci1_inp = (document.getElementById('act2-ci1-inp'));
    let ci2_inp = (document.getElementById('act2-ci2-inp'));
    console.log(CI_1_a2, CI_2_a2);
    if (!verify_values(parseFloat(ci1_inp.value), CI_1_a2)) {
        ci1_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        ci1_inp.style.border = '1px solid #ced4da';
        ci1_inp.disabled = true;
    }
    if (!verify_values(parseFloat(ci2_inp.value), CI_2_a2)) {
        ci2_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        ci2_inp.style.border = '1px solid #ced4da';
        ci2_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('ci2-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         $$ CI_2 = \\left(${CI_1_a2} , ${CI_2_a2} \\right) $$
      </div>
      <button class='btn btn-info std-btn' onclick='activity3();' style='position: relative; left: 0w;' id='act2-p3-btn-3'>Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
// activity2_p3();
//# sourceMappingURL=activity2_p3.js.map