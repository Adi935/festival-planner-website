function showDay(day) {
    // hide all contents
    document.querySelectorAll('.day-content').forEach(sec => sec.classList.remove('active-day'));
    
    // show clicked day
    document.getElementById(day).classList.add('active-day');

    // update button states
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    }

    function toggleStage(stageHeader) {
    var list = stageHeader.nextElementSibling;
    list.classList.toggle('open');
    }

    // Add click action to all artists
    document.querySelectorAll('.stage-list li').forEach(item => {
        item.addEventListener('click', () => {

            var artistName = item.querySelector('span:first-child').innerText;
            var artistTime = item.querySelector('span:last-child').innerText;
            var day = item.getAttribute('data-day');
            var stage = item.getAttribute('data-stage');

            var planList = document.getElementById('planList');

            var existing = planList.querySelector(`[data-artist="${artistName}"]`);

            if (existing) {
                // Remove from plan if selected again
                existing.remove();
                item.classList.remove('selected');
            } else {
                // Add to plan with stage + day
                var entry = document.createElement('li');
                entry.setAttribute('data-artist', artistName);
                entry.innerHTML = `
                    <span>${artistName}</span>
                    <span>${artistTime}</span>
                    <span style="font-size: 12px; color: #444;">
                        (${stage}, ${day})
                    </span>
                `;
                planList.appendChild(entry);
                item.classList.add('selected');
            }
        });
    });



        // RESET Your Plan
        function resetPlan() {
            document.getElementById('planList').innerHTML = "";
            document.querySelectorAll('.stage-list li.selected')
                .forEach(item => item.classList.remove('selected'));
            alert("Your plan has been cleared!");
        }

