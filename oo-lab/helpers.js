var helpers = {

    rect: function(ctx, options) {
        var x = options.x;
        var y = options.y;
        var w = options.w;
        var h = options.h;
        var fillStyle = options.fillStyle;
        var strokeStyle = options.strokeStyle;

        ctx.save();

        if (fillStyle) {
            ctx.fillStyle = fillStyle;
            ctx.fillRect(x, y, w, h);
        }

        if (strokeStyle) {
            ctx.strokeStyle = strokeStyle;
            ctx.strokeRect(x, y, w, h);
        }

        ctx.restore();
    },

    circle: function(ctx, options) {
        var x = options.x;
        var y = options.y;
        var radius = options.radius;
        var fillStyle = options.fillStyle;
        var strokeStyle = options.strokeStyle;

        ctx.save();

        ctx.beginPath();
        ctx.arc(
            x + radius,
            y + radius,
            radius,
            0,
            2 * Math.PI,
            true);

        if (fillStyle) {
            ctx.fillStyle = fillStyle;
            ctx.fill();
        }

        if (strokeStyle) {
            ctx.strokeStyle = strokeStyle;
            ctx.stroke();
        }        

        ctx.restore();
    },

    logo: function(ctx, options) {
        var x = options.x;
        var y = options.y;

        ctx.save();

        ctx.translate(x, y);

        ctx.save();
        ctx.fillStyle = "#2b7998";
        ctx.strokeStyle = "rgba(0, 0, 0, 0)";
        ctx.beginPath();
        ctx.moveTo(89.55375,45.4725);
        ctx.bezierCurveTo(89.55375,69.8175,69.81625,89.55375,45.47124999999999,89.55375);
        ctx.bezierCurveTo(21.12249999999999,89.55375,1.3862499999999898,69.8175,1.3862499999999898,45.4725);
        ctx.bezierCurveTo(1.3862499999999898,21.126249999999995,21.122499999999988,1.3862499999999969,45.47124999999999,1.3862499999999969);
        ctx.bezierCurveTo(69.81625,1.3862499999999969,89.55375,21.126249999999995,89.55375,45.4725);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.strokeStyle = "#373636";
        ctx.lineWidth = 2.7725000381469727;
        ctx.lineCap = "butt";
        ctx.lineJoin = "miter";
        ctx.miterLimit = 4;
        ctx.beginPath();
        ctx.moveTo(89.55375,45.4725);
        ctx.bezierCurveTo(89.55375,69.8175,69.81625,89.55375,45.47124999999999,89.55375);
        ctx.bezierCurveTo(21.12249999999999,89.55375,1.3862499999999898,69.8175,1.3862499999999898,45.4725);
        ctx.bezierCurveTo(1.3862499999999898,21.126249999999995,21.122499999999988,1.3862499999999969,45.47124999999999,1.3862499999999969);
        ctx.bezierCurveTo(69.81625,1.3862499999999969,89.55375,21.126249999999995,89.55375,45.4725);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.fillStyle = "#ffffff";
        ctx.strokeStyle = "rgba(0, 0, 0, 0)";
        ctx.beginPath();
        ctx.moveTo(14.63125,37.23575);
        ctx.lineTo(8.4325,33.7495);
        ctx.lineTo(13.63,32.23575);
        ctx.lineTo(63.98625,37.6395);
        ctx.lineTo(31.66,46.87575);
        ctx.lineTo(27.955,44.7545);
        ctx.lineTo(30.82875,43.92075);
        ctx.lineTo(17.53,36.41075);
        ctx.lineTo(14.631250000000001,37.23575);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.strokeStyle = "#373636";
        ctx.lineWidth = 0.9712499976158142;
        ctx.lineCap = "butt";
        ctx.lineJoin = "miter";
        ctx.miterLimit = 4;
        ctx.beginPath();
        ctx.moveTo(14.63125,37.23575);
        ctx.lineTo(8.4325,33.7495);
        ctx.lineTo(13.63,32.23575);
        ctx.lineTo(63.98625,37.6395);
        ctx.lineTo(31.66,46.87575);
        ctx.lineTo(27.955,44.7545);
        ctx.lineTo(30.82875,43.92075);
        ctx.lineTo(17.53,36.41075);
        ctx.lineTo(14.631250000000001,37.23575);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.fillStyle = "#ffffff";
        ctx.strokeStyle = "rgba(0, 0, 0, 0)";
        ctx.beginPath();
        ctx.moveTo(64.89125,38.74462);
        ctx.lineTo(35.995000000000005,49.332119999999996);
        ctx.lineTo(44.102500000000006,53.93337);
        ctx.lineTo(46.78750000000001,52.950869999999995);
        ctx.lineTo(59.74625000000001,60.28336999999999);
        ctx.lineTo(57.09000000000001,61.25586999999999);
        ctx.lineTo(64.42250000000001,65.41711999999998);
        ctx.lineTo(69.19875000000002,63.66211999999998);
        ctx.lineTo(64.89125000000001,38.74461999999998);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.strokeStyle = "#373636";
        ctx.lineWidth = 0.9712499976158142;
        ctx.lineCap = "butt";
        ctx.lineJoin = "miter";
        ctx.miterLimit = 4;
        ctx.beginPath();
        ctx.moveTo(64.89125,38.74462);
        ctx.lineTo(35.995000000000005,49.332119999999996);
        ctx.lineTo(44.102500000000006,53.93337);
        ctx.lineTo(46.78750000000001,52.950869999999995);
        ctx.lineTo(59.74625000000001,60.28336999999999);
        ctx.lineTo(57.09000000000001,61.25586999999999);
        ctx.lineTo(64.42250000000001,65.41711999999998);
        ctx.lineTo(69.19875000000002,63.66211999999998);
        ctx.lineTo(64.89125000000001,38.74461999999998);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.fillStyle = "#ffffff";
        ctx.strokeStyle = "rgba(0, 0, 0, 0)";
        ctx.beginPath();
        ctx.moveTo(82.38026,32.38775);
        ctx.lineTo(13.630260000000007,32.2365);
        ctx.lineTo(8.432760000000007,33.75025);
        ctx.lineTo(14.631510000000008,37.23525);
        ctx.lineTo(17.53026000000001,36.41025);
        ctx.lineTo(17.53656000000001,34.4465);
        ctx.lineTo(30.82281000000001,41.9615);
        ctx.lineTo(30.82901000000001,43.9215);
        ctx.lineTo(27.95526000000001,44.755250000000004);
        ctx.lineTo(31.660260000000008,46.87650000000001);
        ctx.lineTo(25.992760000000008,59.065250000000006);
        ctx.lineTo(38.91526,50.97650000000001);
        ctx.lineTo(44.101510000000005,53.932750000000006);
        ctx.lineTo(46.78651000000001,52.9515);
        ctx.lineTo(46.78651000000001,50.996500000000005);
        ctx.lineTo(59.68901000000001,58.30275);
        ctx.lineTo(59.74651000000001,60.274);
        ctx.lineTo(57.09026000000001,61.2565);
        ctx.lineTo(64.42276000000001,65.41775);
        ctx.lineTo(69.45526000000001,63.55775);
        ctx.lineTo(82.38026,32.38775);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.strokeStyle = "#373636";
        ctx.lineWidth = 0.9712499976158142;
        ctx.lineCap = "butt";
        ctx.lineJoin = "miter";
        ctx.miterLimit = 4;
        ctx.beginPath();
        ctx.moveTo(82.38026,32.38775);
        ctx.lineTo(13.630260000000007,32.2365);
        ctx.lineTo(8.432760000000007,33.75025);
        ctx.lineTo(14.631510000000008,37.23525);
        ctx.lineTo(17.53026000000001,36.41025);
        ctx.lineTo(17.53656000000001,34.4465);
        ctx.lineTo(30.82281000000001,41.9615);
        ctx.lineTo(30.82901000000001,43.9215);
        ctx.lineTo(27.95526000000001,44.755250000000004);
        ctx.lineTo(31.660260000000008,46.87650000000001);
        ctx.lineTo(25.992760000000008,59.065250000000006);
        ctx.lineTo(38.91526,50.97650000000001);
        ctx.lineTo(44.101510000000005,53.932750000000006);
        ctx.lineTo(46.78651000000001,52.9515);
        ctx.lineTo(46.78651000000001,50.996500000000005);
        ctx.lineTo(59.68901000000001,58.30275);
        ctx.lineTo(59.74651000000001,60.274);
        ctx.lineTo(57.09026000000001,61.2565);
        ctx.lineTo(64.42276000000001,65.41775);
        ctx.lineTo(69.45526000000001,63.55775);
        ctx.lineTo(82.38026,32.38775);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.strokeStyle = "#373636";
        ctx.lineWidth = 0.9712499976158142;
        ctx.lineCap = "butt";
        ctx.lineJoin = "miter";
        ctx.miterLimit = 4;
        ctx.beginPath();
        ctx.moveTo(64.89125,38.74462);
        ctx.lineTo(69.19875,63.66212);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.strokeStyle = "#373636";
        ctx.lineWidth = 0.9712499976158142;
        ctx.lineCap = "butt";
        ctx.lineJoin = "miter";
        ctx.miterLimit = 4;
        ctx.beginPath();
        ctx.moveTo(13.63025,32.23637);
        ctx.lineTo(63.9865,37.64012);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.strokeStyle = "#373636";
        ctx.lineWidth = 0.9712499976158142;
        ctx.lineCap = "butt";
        ctx.lineJoin = "miter";
        ctx.miterLimit = 4;
        ctx.beginPath();
        ctx.moveTo(31.66,46.87625);
        ctx.lineTo(82.38,32.3875);
        ctx.lineTo(35.995,49.3325);
        ctx.lineTo(25.9925,59.065);
        ctx.lineTo(31.66,46.87625);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        ctx.restore();
    }

};