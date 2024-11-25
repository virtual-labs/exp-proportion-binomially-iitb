function activity3() {
    let btn = (document.getElementById('act2-p3-btn-3'));
    btn && btn.remove();
    let text = `

   <div class='divide'>
   <div style='margin-top: 2vw;'>
   <h4 class="center-text fs-28px fb-700">Hypothesis testing</h4>
   <p class="center-text fs-20px fb-600">Testing the proportion of a Binomially distributed variable.</p>
   <br><br>
   
   <h4 class="fb-700 fs-28px" style="text-align:center">Activity 3</h4>
      <br><br>

      <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='act3-temp-btn-1' >Next</button>
   </div>
   </div>
   `;
    maindiv.innerHTML += text;
    hide_all_steps();
}
function start_act3() {
    let btn = (document.getElementById('act3-temp-btn-1'));
    btn && btn.remove();
    let btn_text = get_collapse_btn_text('Data', 'act3-data-div');
    maindiv.innerHTML += `
      ${btn_text}
      <div class="collapse divide center-text fs-16px" id="act3-data-div">
         <h4 style="text-align:left;" class="fs-20px fb-800"> Step 1:</h4>
         <br>
         <div id='act3-data'>
            <div class="row" style="align-items:center;">
               <div class="col-lg-6">
                  The number of trials (n<sub>3</sub>) : 
               </div>
               <div class="col-lg-6">
                  <select class='form-select fs-16px' id='n3-inp' onchange='set_n3();' >
                  </select>
               </div>
            </div>
            <br>
            <div class="row" style="align-items:center;">
               <div class="col-lg-6">
                  The number of heads (x<sub>3</sub>)(less than <span style="display:inline-block; font-size:15px">$$\\frac{n_3}{4}$$</span>) :
               </div>
               <div class="col-lg-6">
                  <input type='number' id='x3-inp' class='form-control fs-16px' disabled />
               </div>
            </div>
            <br>
            <button class='btn btn-info std-btn' onclick='verify_x3();' style='position: relative; left: 0w;' id='vf-x3-btn'>Verify</button>
         </div>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
    setTimeout(() => {
        show_step('act3-data-div');
    }, 150);
    load_n3_dd();
}
function set_n3() {
    let inp = (document.getElementById('n3-inp'));
    let x3_inp = (document.getElementById('x3-inp'));
    if (inp.value != '0') {
        n3 = parseInt(inp.value);
        x3_inp.disabled = false;
    }
    else {
        n3 = 0;
        x3_inp.disabled = true;
    }
}
function load_n3_dd() {
    let n3_dd = (document.getElementById('n3-inp'));
    n3_dd.innerHTML = '';
    let op = new Option('--Select--', '0', true);
    n3_dd.add(op);
    for (let i = 20; i < 31; i++) {
        let op = new Option(i.toString(), i.toString());
        n3_dd.add(op);
    }
}
function verify_x3() {
    let x3_inp = (document.getElementById('x3-inp'));
    console.log(`between 1 and ${n3 / 4}`);
    if (x3_inp.disabled) {
        alert('Please select n3');
        return;
    }
    if (x3_inp.value == '') {
        alert('Please enter x3 value');
        return;
    }
    if (parseFloat(x3_inp.value) < 1 || parseFloat(x3_inp.value) > n3 / 4) {
        alert('Incorrect x3 value, it should be between 1 and n3/4');
        return;
    }
    x3 = 0;
    x3 = parseFloat(x3_inp.value);
    let div = (document.getElementById('act3-data'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         <div>
            The number of trials (n<sub>3</sub>) = ${n3}
         </div>
         <br>
         <div>
            The number of heads (x<sub>3</sub>)(less than <span style="display:inline-block; font-size:15px">$$\\frac{n_3}{4}$$</span>) = ${x3}
         </div>
         <br>
         <button class='btn btn-info std-btn' style='margin: auto;' id='act3-btn-1' onclick='a3_internal_calculations_1();' >Next</button>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function a3_internal_calculations_1() {
    p3_cap = 0;
    z3 = 0;
    p3_cap = parseFloat((x3 / n3).toFixed(3));
    z3 = parseFloat(((p3_cap - p0) / Math.sqrt((p0 * (1 - p0)) / n3)).toFixed(3));
    let div = (document.getElementById('act3-data-div'));
    let btn = (document.getElementById('act3-btn-1'));
    btn && btn.remove();
    div.innerHTML += `
      <div id='act3-probability-div'>
         <div class="row justify-content-center " style="align-items:center;">
            <div class="col-md-6">
               Sample probability : <span style="display:inline-block;">
                  $$ p\̂ _3 = \\frac{x_3}{n_3} =  $$
               </span>
            </div>

            <div class="col-md-6">
               <input type='number' id='p3-inp' class='form-control fs-16px' />
            </div>
         </div>
         <button class='btn btn-info std-btn' onclick='verify_p3();' style='position: relative; left: 0w;' id='vf-p3-btn'>Verify</button>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function verify_p3() {
    let p3_inp = (document.getElementById('p3-inp'));
    console.log(p3_cap);
    if (!verify_values(parseFloat(p3_inp.value), p3_cap)) {
        p3_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        p3_inp.style.border = '1px solid #ced4da';
        p3_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-probability-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         Sample probability : <span style="display:inline-block;">
            $$ p\̂ _3 = \\frac{x_3}{n_3} = ${p3_cap} $$
         </span>
      </div>
      <br>
      <div style="text-align:left;">
         <p>
            Now hypothesised probability of getting head us 0.5. 
            <br>
            <span class="fb-600 fs-18px">So p<sub>0</sub> = 0.5</span>
         </p>
         <p>
            Now for hypothesis test we need test statics which is calculated by using following formula:
         </p>
         <div id="z3-div" class="center-text">
            <div class="row" style="align-items:center;">
               <div class="col-lg-6">
                  $$ z_{30} = \\frac{p\̂ _3- p_0}{\\sqrt{\\frac{p_0 . q_0}{n_3}}} = \\frac{p\̂ _3- p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n_3}}} =  $$
               </div>
               <div class="col-lg-4">
                  <input type='number' id='z3-inp' class='form-control fs-16px' />
               </div>
            </div>
            <button class='btn btn-info std-btn' onclick='verify_z3();' style='position: relative; left: 0w;' id='vf-z3-btn'>Verify</button>
         </div>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function verify_z3() {
    let z3_inp = (document.getElementById('z3-inp'));
    console.log(z3);
    if (!verify_values(parseFloat(z3_inp.value), z3)) {
        z3_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        z3_inp.style.border = '1px solid #ced4da';
        z3_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = document.getElementById('z3-div');
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         $$ z_{30} = \\frac{p\̂ _3- p_0}{\\sqrt{\\frac{p_0 . q_0}{n_3}}} = \\frac{p\̂ _3- p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n_3}}} = ${z3} $$
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto;' id='act3-btn-2' onclick='activity3_p1();'>Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
// activity3();
//# sourceMappingURL=activity3.js.map