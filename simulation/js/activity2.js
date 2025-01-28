function activity2() {
    let btn = (document.getElementById('act1-p3-btn-3'));
    btn && btn.remove();
    let text = `

   <div class='divide'>
   <div style='margin-top: 2vw;'>
   <h4 class="center-text fs-28px fb-700">Hypothesis testing</h4>
   <p class="center-text fs-20px fb-600">Testing the proportion of a Binomially distributed variable.</p>
   <br><br>
   
   <h4 class="fb-700 fs-28px" style="text-align:center">Activity 2</h4>
      <br><br>

      <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='act2-temp-btn-1' >Next</button>
   </div>
   </div>
   `;
    maindiv.innerHTML += text;
    hide_all_steps();
}
function start_act2() {
    let btn = (document.getElementById('act2-temp-btn-1'));
    btn && btn.remove();
    let btn_text = get_collapse_btn_text('Data', 'act2-data-div');
    maindiv.innerHTML += `
      ${btn_text}
      <div class="collapse divide center-text fs-16px" id="act2-data-div">
         <h4 style="text-align:left;" class="fs-20px fb-800"> Step 1:</h4>
         <br>
         <div id='act2-data'>
            <div class="row" style="align-items:center;">
               <div class="col-lg-6">
                  The number of trials (n<sub>2</sub>) : 
               </div>
               <div class="col-lg-6">
                  <select class='form-select fs-16px' id='n2-inp' onchange='set_n2();' >
                  </select>
               </div>
            </div>
            <br>
            <div class="row" style="align-items:center;">
               <div class="col-lg-6">
                  The number of heads (x<sub>2</sub>)(greater than <span style="display:inline-block; font-size:15px">$$\\frac{n_2}{4}$$</span>) :
               </div>
               <div class="col-lg-6">
                  <input type='number' id='x2-inp' class='form-control fs-16px' disabled />
               </div>
            </div>
            <br>
            <button class='btn btn-info std-btn' onclick='verify_x2();' style='position: relative; left: 0w;' id='vf-x2-btn'>Verify</button>
         </div>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
    setTimeout(() => {
        show_step('act2-data-div');
    }, 150);
    load_n2_dd();
}
function set_n2() {
    let inp = (document.getElementById('n2-inp'));
    let x2_inp = (document.getElementById('x2-inp'));
    if (inp.value != '0') {
        n2 = parseInt(inp.value);
        x2_inp.disabled = false;
    }
    else {
        n2 = 0;
        x2_inp.disabled = true;
    }
}
function load_n2_dd() {
    let n2_dd = (document.getElementById('n2-inp'));
    n2_dd.innerHTML = '';
    let op = new Option('--Select--', '0', true);
    n2_dd.add(op);
    for (let i = 20; i < 31; i++) {
        let op = new Option(i.toString(), i.toString());
        n2_dd.add(op);
    }
}
function verify_x2() {
    let x2_inp = (document.getElementById('x2-inp'));
    console.log(`between ${n2 / 4} and ${n2}`);
    if (x2_inp.disabled) {
        alert('Please select n2');
        return;
    }
    if (x2_inp.value == '') {
        alert('Please enter x2 value');
        return;
    }
    if (parseFloat(x2_inp.value) <= n2 / 4 || parseFloat(x2_inp.value) > n2) {
        alert('Incorrect x2 value, it should be between n2/4 and n2');
        return;
    }
    x2 = 0;
    x2 = parseFloat(x2_inp.value);
    let div = (document.getElementById('act2-data'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         <div>
            The number of trials (n<sub>2</sub>) = ${n2}
         </div>
         <br>
         <div>
            The number of heads (x<sub>2</sub>)(greater than <span style="display:inline-block; font-size:15px">$$\\frac{n_2}{4}$$</span>) = ${x2}
         </div>
         <br>
         <button class='btn btn-info std-btn' style='margin: auto;' id='act2-btn-1' onclick='a2_internal_calculations_1();' >Next</button>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function a2_internal_calculations_1() {
    p2_cap = 0;
    z2 = 0;
    p2_cap = parseFloat((x2 / n2).toFixed(3));
    z2 = parseFloat(((p2_cap - p0) / Math.sqrt((p0 * (1 - p0)) / n2)).toFixed(3));
    let div = (document.getElementById('act2-data-div'));
    let btn = (document.getElementById('act2-btn-1'));
    btn && btn.remove();
    div.innerHTML += `
      <div id='act2-probability-div'>
         <div class="row justify-content-center " style="align-items:center;">
            <div class="col-md-6">
               Sample probability : <span style="display:inline-block;">
                  $$ p\̂ _2 = \\frac{x_2}{n_2} =  $$
               </span>
            </div>

            <div class="col-md-6">
               <input type='number' id='p2-inp' class='form-control fs-16px' />
            </div>
         </div>
         <button class='btn btn-info std-btn' onclick='verify_p2();' style='position: relative; left: 0w;' id='vf-p2-btn'>Verify</button>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function verify_p2() {
    let p2_inp = (document.getElementById('p2-inp'));
    console.log(p2_cap);
    if (!verify_values(parseFloat(p2_inp.value), p2_cap)) {
        p2_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        p2_inp.style.border = '1px solid #ced4da';
        p2_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-probability-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         Sample probability : <span style="display:inline-block;">
            $$ p\̂ _2 = \\frac{x_2}{n_2} = ${p2_cap} $$
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
         <div id="z2-div" class="center-text">
            <div class="row" style="align-items:center;">
               <div class="col-lg-6">
                  $$ z_{20} = \\frac{p\̂ _2- p_0}{\\sqrt{\\frac{p_0 . q_0}{n_2}}} = \\frac{p\̂ _2- p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n_2}}} =  $$
               </div>
               <div class="col-lg-4">
                  <input type='number' id='z2-inp' class='form-control fs-16px' />
               </div>
            </div>
            <button class='btn btn-info std-btn' onclick='verify_z2();' style='position: relative; left: 0w;' id='vf-z2-btn'>Verify</button>
         </div>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function verify_z2() {
    let z2_inp = (document.getElementById('z2-inp'));
    console.log(z2);
    if (!verify_values(parseFloat(z2_inp.value), z2)) {
        z2_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        z2_inp.style.border = '1px solid #ced4da';
        z2_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = document.getElementById('z2-div');
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         $$ z_{20} = \\frac{p\̂ _2- p_0}{\\sqrt{\\frac{p_0 . q_0}{n_2}}} = \\frac{p\̂ _2- p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n_2}}} = ${z2} $$
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto;' id='act2-btn-2' onclick='activity2_p1();'>Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
// activity2();
//# sourceMappingURL=activity2.js.map