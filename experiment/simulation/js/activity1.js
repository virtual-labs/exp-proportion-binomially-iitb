let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `

   <div class='divide'>
   <div style='margin-top: 2vw;'>
   <h4 class="center-text fs-28px fb-700">Hypothesis testing</h4>
   <p class="center-text fs-20px fb-600">Testing the proportion of a Binomially distributed variable.</p>
   <br><br>
   
   <h4 class="fb-700 fs-28px" style="text-align:center">Activity 1</h4>
      <br><br>

      <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='act1-temp-btn-1' >Next</button>
   </div>
   </div>
   `;
    maindiv.innerHTML = text;
}
function start_act1() {
    let btn = (document.getElementById('act1-temp-btn-1'));
    btn && btn.remove();
    let btn_text = get_collapse_btn_text('Data', 'act1-data-div');
    maindiv.innerHTML += `
      ${btn_text}
      <div class="collapse divide center-text fs-16px" id="act1-data-div">
         <h4 style="text-align:left;" class="fs-20px fb-800"> Step 1:</h4>
         <br>
         <div id='act1-data'>
            <div class="row" style="align-items:center;">
               <div class="col-lg-6">
                  The number of trials (n<sub>1</sub>) : 
               </div>
               <div class="col-lg-6">
                  <select class='form-select fs-16px' id='n1-inp' onchange='set_n1();' >
                  </select>
               </div>
            </div>
            <br>
            <div class="row" style="align-items:center;">
               <div class="col-lg-6">
                  The number of heads (x<sub>1</sub>)(between <span style="display:inline-block; font-size:15px">$$\\frac{n_1}{4}$$</span> and <span style="display:inline-block; font-size:15px">$$\\frac{3n_1}{4}$$</span>) :
               </div>
               <div class="col-lg-6">
                  <input type='number' id='x1-inp' class='form-control fs-16px' disabled />
               </div>
            </div>
            <br>
            <button class='btn btn-info std-btn' onclick='verify_x1();' style='position: relative; left: 0w;' id='vf-x1-btn'>Verify</button>
         </div>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-data-div');
    }, 150);
    load_n1_dd();
}
function set_n1() {
    let inp = (document.getElementById('n1-inp'));
    let x1_inp = (document.getElementById('x1-inp'));
    if (inp.value != '0') {
        n1 = parseInt(inp.value);
        x1_inp.disabled = false;
    }
    else {
        n1 = 0;
        x1_inp.disabled = true;
    }
}
function load_n1_dd() {
    let n1_dd = (document.getElementById('n1-inp'));
    n1_dd.innerHTML = '';
    let op = new Option('--Select--', '0', true);
    n1_dd.add(op);
    for (let i = 20; i < 31; i++) {
        let op = new Option(i.toString(), i.toString());
        n1_dd.add(op);
    }
}
function verify_x1() {
    let x1_inp = (document.getElementById('x1-inp'));
    console.log(`between ${n1 / 4} and ${3 * (n1 / 4)}`);
    if (x1_inp.disabled) {
        alert('Please select n1');
        return;
    }
    if (x1_inp.value == '') {
        alert('Please enter x1 value');
        return;
    }
    if (parseFloat(x1_inp.value) < n1 / 4 ||
        parseFloat(x1_inp.value) > 3 * (n1 / 4)) {
        alert('Incorrect x1 value, it should be between n1/4 and 3n1/4');
        return;
    }
    x1 = 0;
    x1 = parseFloat(x1_inp.value);
    let div = (document.getElementById('act1-data'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         <div>
            The number of trials (n<sub>1</sub>) = ${n1}
         </div>
         <br>
         <div>
            The number of heads (x<sub>1</sub>)(between <span style="display:inline-block; font-size:15px">$$\\frac{n_1}{4}$$</span> and <span style="display:inline-block; font-size:15px">$$\\frac{3n_1}{4}$$</span>) = ${x1}
         </div>
         <br>
         <button class='btn btn-info std-btn' style='margin: auto;' id='act1-btn-1' onclick='a1_internal_calculations_1();' >Next</button>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function a1_internal_calculations_1() {
    p1_cap = 0;
    z1 = 0;
    p1_cap = parseFloat((x1 / n1).toFixed(3));
    z1 = parseFloat(((p1_cap - p0) / Math.sqrt((p0 * (1 - p0)) / n1)).toFixed(3));
    let div = (document.getElementById('act1-data-div'));
    let btn = (document.getElementById('act1-btn-1'));
    btn && btn.remove();
    div.innerHTML += `
      <div id='act1-probability-div'>
         <div class="row justify-content-center " style="align-items:center;">
            <div class="col-md-6">
               Sample probability : <span style="display:inline-block;">
                  $$ p\̂ _1 = \\frac{x_1}{n_1} =  $$
               </span>
            </div>

            <div class="col-md-6">
               <input type='number' id='p1-inp' class='form-control fs-16px' />
            </div>
         </div>
         <button class='btn btn-info std-btn' onclick='verify_p1();' style='position: relative; left: 0w;' id='vf-p1-btn'>Verify</button>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function verify_p1() {
    let p1_inp = (document.getElementById('p1-inp'));
    console.log(p1_cap);
    if (!verify_values(parseFloat(p1_inp.value), p1_cap)) {
        p1_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        p1_inp.style.border = '1px solid #ced4da';
        p1_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-probability-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         Sample probability : <span style="display:inline-block;">
            $$ p\̂ _1 = \\frac{x_1}{n_1} = ${p1_cap} $$
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
         <div id="z1-div" class="center-text">
            <div class="row" style="align-items:center;">
               <div class="col-lg-6">
                  $$ z_{10} = \\frac{p\̂ _1- p_0}{\\sqrt{\\frac{p_0 . q_0}{n_1}}} = \\frac{p\̂ _1- p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n_1}}} =  $$
               </div>
               <div class="col-lg-4">
                  <input type='number' id='z1-inp' class='form-control fs-16px' />
               </div>
            </div>
            <button class='btn btn-info std-btn' onclick='verify_z1();' style='position: relative; left: 0w;' id='vf-z1-btn'>Verify</button>
         </div>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function verify_z1() {
    let z1_inp = (document.getElementById('z1-inp'));
    console.log(z1);
    if (!verify_values(parseFloat(z1_inp.value), z1)) {
        z1_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        z1_inp.style.border = '1px solid #ced4da';
        z1_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = document.getElementById('z1-div');
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         $$ z_{10} = \\frac{p\̂ _1- p_0}{\\sqrt{\\frac{p_0 . q_0}{n_1}}} = \\frac{p\̂ _1- p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n_1}}} = ${z1} $$
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto;' id='act1-btn-2' onclick='activity1_p1();'>Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
activity1();
//# sourceMappingURL=activity1.js.map