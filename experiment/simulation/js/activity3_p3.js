function activity3_p3() {
    let btn = (document.getElementById('act3-p2-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Confidence Interval', 'act3-ci-div');
    a3_internal_calculation_2();
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide fs-16px" id="act3-ci-div">
         <h4 class="fs-16px fb-700" style="text-align:left;">
            The Confidence Interval:
         </h4>
         <br>
         <p>
            Now we will determine the confidence interval:
            <br>
            But we need to find Standard error furthermore Margin of errors
         </p>
         <div id="act3-se-div" class="center-text">
            <div class="row justify-content-center" style="align-items:center;">
               <div class="col-lg-4">
                  $$ SE = \\sqrt{\\frac{p\̂ _3\(1-p\̂ _3\)}{n_3}} =  $$
               </div>
               <div class="col-lg-4">
                  <input type='number' id='se3-inp' class='form-control fs-16px' />
               </div>
            </div>
            <button class='btn btn-info std-btn' onclick='verify_se3();' style='position: relative; left: 0w;' id='vf-se3-btn'>Verify</button>
         </div>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('act3-ci-div');
    }, 150);
}
function a3_internal_calculation_2() {
    SE_a3 = 0;
    ME_a3 = 0;
    CI_1_a3 = 0;
    CI_2_a3 = 0;
    SE_a3 = parseFloat(Math.sqrt((p3_cap * (1 - p3_cap)) / n3).toFixed(3));
    ME_a3 = parseFloat((z3 * SE_a3).toFixed(3));
    CI_1_a3 = parseFloat((p3_cap - ME_a3).toFixed(3));
    CI_2_a3 = parseFloat((p3_cap + ME_a3).toFixed(3));
}
function verify_se3() {
    let se_inp = (document.getElementById('se3-inp'));
    console.log(SE_a3);
    if (!verify_values(parseFloat(se_inp.value), SE_a3)) {
        se_inp.style.border = '1px solid red';
        alert('Incorrect SE value');
        return;
    }
    else {
        se_inp.style.border = '1px solid #ced4da';
        se_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-se-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         $$ SE = \\sqrt{\\frac{p\̂ _3(1-p\̂ _3)}{n_3}} = ${SE_a3} $$
      </div>
      <button class='btn btn-info std-btn' onclick='a3_load_me_div();' style='position: relative; left: 0w;' id='act3-p3-btn-1'>Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function a3_load_me_div() {
    let btn = (document.getElementById('act3-p3-btn-1'));
    btn && btn.remove();
    let div = (document.getElementById('act3-ci-div'));
    div.innerHTML += `
   <br>
   <p>
      Now Margin of Errors
   </p>
   <div id="act3-me-div" class="center-text">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-lg-4">
            $$ ME = z_{30} \× SE =  $$
         </div>
         <div class="col-lg-4">
            <input type='number' id='me3-inp' class='form-control fs-16px' />
         </div>
      </div>
      <button class='btn btn-info std-btn' onclick='verify_me3();' style='position: relative; left: 0w;' id='vf-me3-btn'>Verify</button>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function verify_me3() {
    let me_inp = (document.getElementById('me3-inp'));
    console.log(ME_a3);
    if (!verify_values(parseFloat(me_inp.value), ME_a3)) {
        me_inp.style.border = '1px solid red';
        alert('Incorrect ME value');
        return;
    }
    else {
        me_inp.style.border = '1px solid #ced4da';
        me_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-me-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
      $$ ME = z_{30} \× SE = ${ME_a3} $$
      </div>
      <button class='btn btn-info std-btn' onclick='a3_load_ci_div();' style='position: relative; left: 0w;' id='act3-p3-btn-2'>Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function a3_load_ci_div() {
    let btn = (document.getElementById('act3-p3-btn-2'));
    btn && btn.remove();
    let div = (document.getElementById('act3-ci-div'));
    div.innerHTML += `
   <br>
   <div>
      We have,
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-lg-4">
            $$ p\̂ _3 = ${p3_cap} $$
         </div>
         <div class="col-lg-4">
            $$ ME = z_{30} \× SE = ${ME_a3} $$
         </div>
      </div>
      <div>
         So confidence interval is,
         $$ CI = (p\̂ _3 - ME , p\̂ _3 + ME) $$
      </div>
      <div id="ci3-div" class="center-text">
         <div class="row justify-content-center" style="align-items:center;" >
            <div class="col-lg-4">
               $$ p\̂ _3 - ME =  $$
            </div>
            <div class="col-lg-4">
               <input type='number' id='act3-ci1-inp' class='form-control fs-16px' />
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;" >
            <div class="col-lg-4">
               $$ p\̂ _3 + ME =  $$
            </div>
            <div class="col-lg-4">
               <input type='number' id='act3-ci2-inp' class='form-control fs-16px' />
            </div>
         </div>

         <br>

         <button class='btn btn-info std-btn' onclick='verify_ci3();' style='position: relative; left: 0w;' id='vf-ci3-btn'>Verify</button>
      </div>

   </div>

   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function verify_ci3() {
    let ci1_inp = (document.getElementById('act3-ci1-inp'));
    let ci2_inp = (document.getElementById('act3-ci2-inp'));
    console.log(CI_1_a3, CI_2_a3);
    if (!verify_values(parseFloat(ci1_inp.value), CI_1_a3)) {
        ci1_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        ci1_inp.style.border = '1px solid #ced4da';
        ci1_inp.disabled = true;
    }
    if (!verify_values(parseFloat(ci2_inp.value), CI_2_a3)) {
        ci2_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        ci2_inp.style.border = '1px solid #ced4da';
        ci2_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('ci3-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         $$ CI_3 = \\left(${CI_1_a3} , ${CI_2_a3} \\right) $$
      </div>
      <button class='btn btn-info std-btn' onclick='activity4();' style='position: relative; left: 0w;' id='act3-p3-btn-3'>Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
// activity3_p3();
//# sourceMappingURL=activity3_p3.js.map