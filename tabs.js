$('.tab').on('click', function(e){
    e.preventDefault();
    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
})

{/* <div class="tabs__wrapper">
    <div class="tabs">
        <a href="#" class="tab tab--active"></a>
    </div>
    <div class="tabs-container">
        <div class="tabs-content tabs-content--active"></div>
    </div>
</div> */}