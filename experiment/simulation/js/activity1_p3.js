function activity1_p3() {
    let btn = (document.getElementById('act1-p2-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Confidence Interval', 'act1-ci-div');
    a1_internal_calculation_2();
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide fs-16px" id="act1-ci-div">
         <h4 class="fs-16px fb-700" style="text-align:left;">
            The Confidence Interval:
         </h4>
         <br>
         <p>
            Now we will determine the confidence interval:
            <br>
            But we need to find Standard error furthermore Margin of errors
         </p>
         <div id="act1-se-div" class="center-text">
            <div class="row justify-content-center" style="align-items:center;">
               <div class="col-lg-4">
                  $$ SE = \\sqrt{\\frac{p\̂ _1\(1-p\̂ _1\)}{n_1}} =  $$
               </div>
               <div class="col-lg-4">
                  <input type='number' id='se1-inp' class='form-control fs-16px' />
               </div>
            </div>
            <button class='btn btn-info std-btn' onclick='verify_se1();' style='position: relative; left: 0w;' id='vf-se1-btn'>Verify</button>
         </div>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-ci-div');
    }, 150);
}
function a1_internal_calculation_2() {
    SE_a1 = 0;
    ME_a1 = 0;
    CI_1_a1 = 0;
    CI_2_a1 = 0;
    SE_a1 = parseFloat(Math.sqrt((p1_cap * (1 - p1_cap)) / n1).toFixed(3));
    ME_a1 = parseFloat((z1 * SE_a1).toFixed(3));
    CI_1_a1 = parseFloat((p1_cap - ME_a1).toFixed(3));
    CI_2_a1 = parseFloat((p1_cap + ME_a1).toFixed(3));
}
function verify_se1() {
    let se_inp = (document.getElementById('se1-inp'));
    console.log(SE_a1);
    if (!verify_values(parseFloat(se_inp.value), SE_a1)) {
        se_inp.style.border = '1px solid red';
        alert('Incorrect SE value');
        return;
    }
    else {
        se_inp.style.border = '1px solid #ced4da';
        se_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-se-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         $$ SE = \\sqrt{\\frac{p\̂ _1(1-p\̂ _1)}{n_1}} = ${SE_a1} $$
      </div>
      <button class='btn btn-info std-btn' onclick='a1_load_me_div();' style='position: relative; left: 0w;' id='act1-p3-btn-1'>Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function a1_load_me_div() {
    let btn = (document.getElementById('act1-p3-btn-1'));
    btn && btn.remove();
    let div = (document.getElementById('act1-ci-div'));
    div.innerHTML += `
   <br>
   <p>
      Now Margin of Errors
   </p>
   <div id="act1-me-div" class="center-text">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-lg-4">
            $$ ME = z_{10} \× SE =  $$
         </div>
         <div class="col-lg-4">
            <input type='number' id='me1-inp' class='form-control fs-16px' />
         </div>
      </div>
      <button class='btn btn-info std-btn' onclick='verify_me1();' style='position: relative; left: 0w;' id='vf-me1-btn'>Verify</button>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function verify_me1() {
    let me_inp = (document.getElementById('me1-inp'));
    console.log(ME_a1);
    if (!verify_values(parseFloat(me_inp.value), ME_a1)) {
        me_inp.style.border = '1px solid red';
        alert('Incorrect ME value');
        return;
    }
    else {
        me_inp.style.border = '1px solid #ced4da';
        me_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-me-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
      $$ ME = z_{10} \× SE = ${ME_a1} $$
      </div>
      <button class='btn btn-info std-btn' onclick='a1_load_ci_div();' style='position: relative; left: 0w;' id='act1-p3-btn-2'>Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function a1_load_ci_div() {
    let btn = (document.getElementById('act1-p3-btn-2'));
    btn && btn.remove();
    let div = (document.getElementById('act1-ci-div'));
    div.innerHTML += `
   <br>
   <div>
      We have,
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-lg-4">
            $$ p\̂ _1 = ${p1_cap} $$
         </div>
         <div class="col-lg-4">
            $$ ME = z_{10} \× SE = ${ME_a1} $$
         </div>
      </div>
      <div>
         So confidence interval is,
         $$ CI = (p\̂ _1 - ME , p\̂ _1 + ME) $$
      </div>
      <div id="ci1-div" class="center-text">
         <div class="row justify-content-center" style="align-items:center;" >
            <div class="col-lg-4">
               $$ p\̂ _1 - ME =  $$
            </div>
            <div class="col-lg-4">
               <input type='number' id='act1-ci1-inp' class='form-control fs-16px' />
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;" >
            <div class="col-lg-4">
               $$ p\̂ _1 + ME =  $$
            </div>
            <div class="col-lg-4">
               <input type='number' id='act1-ci2-inp' class='form-control fs-16px' />
            </div>
         </div>
         
         <br>

         <button class='btn btn-info std-btn' onclick='verify_ci1();' style='position: relative; left: 0w;' id='vf-ci1-btn'>Verify</button>
      </div>

   </div>
      
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function verify_ci1() {
    let ci1_inp = (document.getElementById('act1-ci1-inp'));
    let ci2_inp = (document.getElementById('act1-ci2-inp'));
    console.log(CI_1_a1, CI_2_a1);
    if (!verify_values(parseFloat(ci1_inp.value), CI_1_a1)) {
        ci1_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        ci1_inp.style.border = '1px solid #ced4da';
        ci1_inp.disabled = true;
    }
    if (!verify_values(parseFloat(ci2_inp.value), CI_2_a1)) {
        ci2_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        ci2_inp.style.border = '1px solid #ced4da';
        ci2_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('ci1-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         $$ CI_1 = \\left(${CI_1_a1} , ${CI_2_a1} \\right) $$
      </div>
      <button class='btn btn-info std-btn' onclick='activity2();' style='position: relative; left: 0w;' id='act1-p3-btn-3'>Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
// activity1_p3();
//# sourceMappingURL=activity1_p3.js.map