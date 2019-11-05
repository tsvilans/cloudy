



var HiddenLineDrawing = {
	Parameters: {
		/*
		/rhino/geometry/hiddenlinedrawingparameters/new
		/rhino/geometry/hiddenlinedrawingparameters/addclippingplane
		/rhino/geometry/hiddenlinedrawingparameters/addclippingplane-hiddenlinedrawingparameters_plane
		/rhino/geometry/hiddenlinedrawingparameters/addgeometry
		/rhino/geometry/hiddenlinedrawingparameters/addgeometry-hiddenlinedrawingparameters_geometrybase_object
		/rhino/geometry/hiddenlinedrawingparameters/addgeometry-hiddenlinedrawingparameters_geometrybase_transform_object
		/rhino/geometry/hiddenlinedrawingparameters/getabsolutetolerance
		/rhino/geometry/hiddenlinedrawingparameters/getflatten
		/rhino/geometry/hiddenlinedrawingparameters/getincludehiddencurves
		/rhino/geometry/hiddenlinedrawingparameters/getincludetangentedges
		/rhino/geometry/hiddenlinedrawingparameters/getincludetangentseams
		/rhino/geometry/hiddenlinedrawingparameters/setabsolutetolerance
		/rhino/geometry/hiddenlinedrawingparameters/setabsolutetolerance-hiddenlinedrawingparameters_double
		/rhino/geometry/hiddenlinedrawingparameters/setflatten
		/rhino/geometry/hiddenlinedrawingparameters/setflatten-hiddenlinedrawingparameters_bool
		/rhino/geometry/hiddenlinedrawingparameters/setincludehiddencurves
		/rhino/geometry/hiddenlinedrawingparameters/setincludehiddencurves-hiddenlinedrawingparameters_bool
		/rhino/geometry/hiddenlinedrawingparameters/setincludetangentedges
		/rhino/geometry/hiddenlinedrawingparameters/setincludetangentedges-hiddenlinedrawingparameters_bool
		/rhino/geometry/hiddenlinedrawingparameters/setincludetangentseams
		/rhino/geometry/hiddenlinedrawingparameters/setincludetangentseams-hiddenlinedrawingparameters_bool
		/rhino/geometry/hiddenlinedrawingparameters/setviewport
		/rhino/geometry/hiddenlinedrawingparameters/setviewport-hiddenlinedrawingparameters_viewportinfo
		/rhino/geometry/hiddenlinedrawingparameters/setviewport-hiddenlinedrawingparameters_rhinoviewport
		*/
	    new : function(multiple=false) {
	        let url="/rhino/geometry/hiddenlinedrawingparameters/new";
            if(multiple) url = url + "?multiple=true"	        
	        let args = RhinoCompute.zipArgs(multiple);
	        var promise = RhinoCompute.computeFetch(url, args);
	        return promise;
    	},

    	addGeometry : function(self, geometrybase, object=null, multiple=false) {
	        let url="/rhino/geometry/hiddenlinedrawingparameters/addgeometry-hiddenlinedrawingparameters_geometrybase_object";
            if(multiple) url = url + "?multiple=true"	        
	        let args = RhinoCompute.zipArgs(multiple, self, geometrybase, object);
	        var promise = RhinoCompute.computeFetch(url, args);
	        return promise;
    	},
    	
    	addGeometry : function(self, geometrybase, transform, object, multiple=false) {
	        let url="/rhino/geometry/hiddenlinedrawingparameters/addgeometry-hiddenlinedrawingparameters_geometrybase_transform_object";
            if(multiple) url = url + "?multiple=true"	        
	        let args = RhinoCompute.zipArgs(multiple, self, geometrybase, transform, object);
	        var promise = RhinoCompute.computeFetch(url, args);
	        return promise;
    	},

    	setViewport : function(self, viewportinfo, multiple=false) {
	        let url="/rhino/geometry/hiddenlinedrawingparameters/setviewport-hiddenlinedrawingparameters_viewportinfo";
            if(multiple) url = url + "?multiple=true"	        
	        let args = RhinoCompute.zipArgs(multiple, self, viewportinfo);
	        var promise = RhinoCompute.computeFetch(url, args);
	        return promise;    	}

	},

	/*
	/rhino/geometry/hiddenlinedrawing/boundingbox
	/rhino/geometry/hiddenlinedrawing/boundingbox-hiddenlinedrawing_bool
	/rhino/geometry/hiddenlinedrawing/compute
	/rhino/geometry/hiddenlinedrawing/compute-hiddenlinedrawingparameters_bool
	/rhino/geometry/hiddenlinedrawing/compute-hiddenlinedrawingparameters_bool_iprogress`1_cancellationtoken
	/rhino/geometry/hiddenlinedrawing/dispose
	/rhino/geometry/hiddenlinedrawing/getpoints
	/rhino/geometry/hiddenlinedrawing/getsegments
	/rhino/geometry/hiddenlinedrawing/getviewport
	/rhino/geometry/hiddenlinedrawing/getworldtohiddenline
	/rhino/geometry/hiddenlinedrawingobject/getgeometry
	/rhino/geometry/hiddenlinedrawingobject/gettag
	/rhino/geometry/hiddenlinedrawingobject/gettransform
	/rhino/geometry/hiddenlinedrawingpoint/getclippingplaneindex
	/rhino/geometry/hiddenlinedrawingpoint/getindex
	/rhino/geometry/hiddenlinedrawingpoint/getlocation
	/rhino/geometry/hiddenlinedrawingpoint/getpointvisibility
	/rhino/geometry/hiddenlinedrawingpoint/getsourceobject
	/rhino/geometry/hiddenlinedrawingpoint/getsourceobjectcomponentindex
	/rhino/geometry/hiddenlinedrawingobjectcurve/curve
	/rhino/geometry/hiddenlinedrawingobjectcurve/curve-hiddenlinedrawingobjectcurve_double
	/rhino/geometry/hiddenlinedrawingobjectcurve/curve-hiddenlinedrawingobjectcurve_double_int
	/rhino/geometry/hiddenlinedrawingobjectcurve/getclippingplaneindex
	/rhino/geometry/hiddenlinedrawingobjectcurve/getindex
	/rhino/geometry/hiddenlinedrawingobjectcurve/getisprojecting
	/rhino/geometry/hiddenlinedrawingobjectcurve/getisvalid
	/rhino/geometry/hiddenlinedrawingobjectcurve/getoriginaldomainstart
	/rhino/geometry/hiddenlinedrawingobjectcurve/getparameters
	/rhino/geometry/hiddenlinedrawingobjectcurve/getsegments
	/rhino/geometry/hiddenlinedrawingobjectcurve/getsilhouettetype
	/rhino/geometry/hiddenlinedrawingobjectcurve/getsourceobject
	/rhino/geometry/hiddenlinedrawingobjectcurve/getsourceobjectcomponentindex
	/rhino/geometry/hiddenlinedrawingsegment/getcurvegeometry
	/rhino/geometry/hiddenlinedrawingsegment/getcurvesidefills
	/rhino/geometry/hiddenlinedrawingsegment/getindex
	/rhino/geometry/hiddenlinedrawingsegment/getisscenesilhouette
	/rhino/geometry/hiddenlinedrawingsegment/getparentcurve
	/rhino/geometry/hiddenlinedrawingsegment/getsegmentvisibility
	*/
    boundingBox : function(self, includeHidden=false) {
        let url="/rhino/geometry/hiddenlinedrawing/boundingbox-hiddenlinedrawing_bool";
        if(multiple) url = url + "?multiple=true"	        
        let args = RhinoCompute.zipArgs(multiple, self, includeHidden);
        var promise = RhinoCompute.computeFetch(url, args);
        return promise;
    },

    compute : function(parameters, multipleThreads=false, multiple=false) {
        let url="/rhino/geometry/hiddenlinedrawing/compute-hiddenlinedrawingparameters_bool";
        if(multiple) url = url + "?multiple=true"	        
        let args = RhinoCompute.zipArgs(multiple, parameters, multipleThreads);
        var promise = RhinoCompute.computeFetch(url, args);
        return promise;
    },

    getSegments : function(hld, multiple=false) {
        let url="/rhino/geometry/hiddenlinedrawing/getsegments";
        if(multiple) url = url + "?multiple=true"	        
        let args = RhinoCompute.zipArgs(multiple, hld);
        var promise = RhinoCompute.computeFetch(url, args);
        return promise;
    },

    getViewport : function(hld, multiple=false) {
        let url="/rhino/geometry/hiddenlinedrawing/getviewport";
        if(multiple) url = url + "?multiple=true"	        
        let args = RhinoCompute.zipArgs(multiple, hld);
        var promise = RhinoCompute.computeFetch(url, args);
        return promise;
    }

}


