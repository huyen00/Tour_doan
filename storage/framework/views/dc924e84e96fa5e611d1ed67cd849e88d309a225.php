
<?php $__env->startSection('content'); ?>
    <?php $__currentLoopData = $page->sections; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $section): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
           <?php echo $__env->make($section->theme->link_code, \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>         
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('landingpage.layout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\Tour_doan\resources\views\landingpage\home.blade.php ENDPATH**/ ?>