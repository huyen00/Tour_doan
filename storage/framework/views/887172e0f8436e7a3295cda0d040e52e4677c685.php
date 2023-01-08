
<?php $__env->startSection('content'); ?>
<div id="body">
    <div class="container">
        <div class="page_item_news">
            <div class="row">
                <div class="content_item_news">
                    <h2><?php echo e(__($tintuc->title)); ?></h2>
                    <img src="<?php echo e($tintuc->image); ?>" class="img-fluid" alt="">
                    <span><?php echo __($tintuc->content); ?></span>
                </div>
                <div class="categori_item_news">
                
                   
                    <div class="featured_news_list">
                        <h5>Tin Nổi Bật</h5>
                        <ul class="related_news" style="top: 100px;">
                            <?php $__currentLoopData = $tintuc_lienquan; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tintuc): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <li class="col_related_news">
                                <div class="row ">
                                    <div class="news_is">
                                        <a href="">
                                            <img src="<?php echo e($tintuc->image); ?>" class="img-fluid img_featured" alt="">
                                        </a>
                                    </div>
                                    <div class="text_news">
                                        <h5 class="title_featured_item_news"></a><a href="<?php echo e(route('new.detail',__($tintuc->slug))); ?>"><?php echo e(__($tintuc->title)); ?></a></h5>
                                        <div class="der_news clamp three-lines text_page">
                                            <?php echo Str::words(strip_tags(__($tintuc->content)), 5, '...'); ?></div>

                                        <div class="box_duoi">
                                            <div class="left_news">
                                                <i class="fa-regular fa-calendar-days"></i>  <?php echo e(\Carbon\Carbon::parse($tintuc->created_at)->format('d/m/Y')); ?></div>
                                            <a href="<?php echo e(route('new.detail',__($tintuc->slug))); ?>" class="read_view">Xem thêm <i class="fa-regular fa-calendar-days"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </li>  
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?> 
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
       
    </div>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('landingpage.layout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\Tour_doan\resources\views/landingpage/new_detail.blade.php ENDPATH**/ ?>