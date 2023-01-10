const card = document.getElementById("card");
const selected = document.getElementById('selected');
const select1 = document.getElementById('satu');
const select2 = document.getElementById('dua');
const select3 = document.getElementById('tiga');
const select4 = document.getElementById('empat');
const select5 = document.getElementById('lima');
const btn = document.getElementById('btn');
const txt = document.getElementById('pilihan');
const back = document.getElementById('back');

select1.addEventListener('click', () => {
    select1.dataset.pilih = 'yes';
    select2.dataset.pilih = 'no';
    select3.dataset.pilih = 'no';
    select4.dataset.pilih = 'no';
    select5.dataset.pilih = 'no';
});
select2.addEventListener('click', () => {
    select1.dataset.pilih = 'no';
    select2.dataset.pilih = 'yes';
    select3.dataset.pilih = 'no';
    select4.dataset.pilih = 'no';
    select5.dataset.pilih = 'no';
});
select3.addEventListener('click', () => {
    select1.dataset.pilih = 'no';
    select2.dataset.pilih = 'no';
    select3.dataset.pilih = 'yes';
    select4.dataset.pilih = 'no';
    select5.dataset.pilih = 'no';
});
select4.addEventListener('click', () => {
    select1.dataset.pilih = 'no';
    select2.dataset.pilih = 'no';
    select3.dataset.pilih = 'no';
    select4.dataset.pilih = 'yes';
    select5.dataset.pilih = 'no';
});
select5.addEventListener('click', () => {
    select1.dataset.pilih = 'no';
    select2.dataset.pilih = 'no';
    select3.dataset.pilih = 'no';
    select4.dataset.pilih = 'no';
    select5.dataset.pilih = 'yes';
});


btn.addEventListener('click', () => {
    if(select1.dataset.pilih == "yes") {
        card.dataset.aktif = "no";
        selected.dataset.aktif = "yes";
        txt.innerHTML = `You selected 1 out of 5`;
    } else if (select2.dataset.pilih == "yes") {
        card.dataset.aktif = "no";
        selected.dataset.aktif = "yes";
        txt.innerHTML = `You selected 2 out of 5`;
    } else if (select3.dataset.pilih == "yes") {
        card.dataset.aktif = "no";
        selected.dataset.aktif = "yes";
        txt.innerHTML = `You selected 3 out of 5`;
    } else if (select4.dataset.pilih == "yes") {
        card.dataset.aktif = "no";
        selected.dataset.aktif = "yes";
        txt.innerHTML = `You selected 4 out of 5`;
    } else if (select5.dataset.pilih == "yes") {
        card.dataset.aktif = "no";
        selected.dataset.aktif = "yes";
        txt.innerHTML = `You selected 5 out of 5`;
    } else {
        alert("please select 1 from 5 list");
    }
});

back.addEventListener('click', () => {
    card.dataset.aktif = "yes";
    selected.dataset.aktif = "no";
    select1.dataset.pilih = 'no';
    select2.dataset.pilih = 'no';
    select3.dataset.pilih = 'no';
    select4.dataset.pilih = 'no';
    select5.dataset.pilih = 'no';
});