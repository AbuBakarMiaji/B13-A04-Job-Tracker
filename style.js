document.getElementById('all-list').addEventListener('click',function(){
        const noJobs= document.getElementById('no-jobs');
        const allJobs= document.getElementById('all-jobs');
        noJobs.classList.add("hidden");
        allJobs.classList.remove("hidden");


});

document.getElementById('interview').addEventListener('click',function(){
        const allJobs= document.getElementById('all-jobs');
        const noJobs= document.getElementById('no-jobs');
        allJobs.classList.add("hidden");
        noJobs.classList.remove("hidden");

});

document.getElementById('rejected').addEventListener('click',function(){
        const allJobs= document.getElementById('all-jobs');
        const noJobs= document.getElementById('no-jobs');
        allJobs.classList.add("hidden");
        noJobs.classList.remove("hidden");

});

// <!-- Job serial 01 -->

document.getElementById('interview-click').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click');
        const jobStatus= document.getElementById('status');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");
});

document.getElementById('reject-click').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click');
        const jobStatus= document.getElementById('status');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");
});

// <!-- Job serial 02 -->

document.getElementById('interview-click2').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click2');
        const jobStatus= document.getElementById('status2');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");
});

document.getElementById('reject-click2').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click2');
        const jobStatus= document.getElementById('status2');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");
});

// <!-- Job serial 03 -->

document.getElementById('interview-click3').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click3');
        const jobStatus= document.getElementById('status3');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");
});

document.getElementById('reject-click3').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click3');
        const jobStatus= document.getElementById('status3');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");
});

// <!-- Job serial 04 -->

document.getElementById('interview-click4').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click4');
        const jobStatus= document.getElementById('status4');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");
});

document.getElementById('reject-click4').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click4');
        const jobStatus= document.getElementById('status4');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");
});

// <!-- Job serial 05 -->

document.getElementById('interview-click5').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click5');
        const jobStatus= document.getElementById('status5');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");
});

document.getElementById('reject-click5').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click5');
        const jobStatus= document.getElementById('status5');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");
});

// <!-- Job serial 06 -->

document.getElementById('interview-click6').addEventListener('click',function(){
        const interviewStatus= document.getElementById('interview-click6');
        const jobStatus= document.getElementById('status6');
        jobStatus.innerText= interviewStatus.innerText;
        jobStatus.classList.add("text-green-600", "border","border-green-600");
        jobStatus.classList.remove("text-red-600","border-red-600");
});

document.getElementById('reject-click6').addEventListener('click',function(){
        const rejectStatus= document.getElementById('reject-click6');
        const jobStatus= document.getElementById('status6');
        jobStatus.innerText= rejectStatus.innerText;
        jobStatus.classList.add("text-red-600", "border","border-red-600");
        jobStatus.classList.remove("text-green-600");
});


