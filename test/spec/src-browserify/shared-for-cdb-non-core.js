module.exports = function(cdb) {
  describe('shared for cdb object in all bundles except for core', function() {
    it('should have the commonly used vendor libs defined', function() {
      expect(cdb.$).toEqual(jasmine.any(Function));
      expect(cdb.L).toEqual(jasmine.any(Object));
      expect(cdb.Mustache).toEqual(jasmine.any(Object));
      expect(cdb.Backbone).toEqual(jasmine.any(Object));
      expect(cdb._).toEqual(jasmine.any(Function));
    });

    it("should create a cdb.Profiler", function() {
      expect(cdb.config).toBeDefined();
    });

    it("should generate error when error is called", function() {
      cdb.config.ERROR_TRACK_ENABLED = true
      cdb.errors.reset([]);
      cdb.log.error('this is an error');
      expect(cdb.errors.size()).toEqual(1);
    });

    it("should create a global error list", function() {
      expect(cdb.errors).toBeDefined();
    });

    describe('cdb.config', function() {
      it('should contain links variables', function() {
        expect(cdb.config.get('cartodb_attributions')).toEqual("CartoDB <a href='http://cartodb.com/attributions' target='_blank'>attribution</a>");
        expect(cdb.config.get('cartodb_logo_link')).toEqual("http://www.cartodb.com");
      });
    });

    it("should create a cdb.core with expected model", function() {
      expect(cdb.core.Loader).toBeDefined();
      expect(cdb.core.util).toBeDefined();
      expect(cdb.core.Profiler).toBeDefined();
      expect(cdb.core.Template).toBeDefined();
      expect(cdb.core.TemplateList).toBeDefined();
      expect(cdb.core.Model).toBeDefined();
      expect(cdb.core.View).toBeDefined();
    });

    it("should create a cdb.decorators", function() {
      expect(cdb.decorators).toBeDefined();
    });

    it("should create a log", function() {
      expect(cdb.log).toBeDefined();
    });

    it('should add templates stuff', function() {
      expect(cdb.templates instanceof cdb.core.TemplateList).toBe(true);
    });

    it('should have a cdb.ui.common object', function() {
      expect(cdb.ui.common.Dialog).toEqual(jasmine.any(Function));
      expect(cdb.ui.common.ShareDialog).toEqual(jasmine.any(Function));
    });

    it('should have a cdb.geo object', function() {
      expect(cdb.geo).toEqual(jasmine.any(Object));
      expect(cdb.geo.geocoder).toEqual(jasmine.any(Object));
      expect(cdb.geo.geocoder.YAHOO).toEqual(jasmine.any(Object));
      expect(cdb.geo.geocoder.NOKIA).toEqual(jasmine.any(Object));

      expect(cdb.geo.Geometry).toEqual(jasmine.any(Function));
      expect(cdb.geo.Geometries).toEqual(jasmine.any(Function));

      expect(cdb.geo.MapLayer).toEqual(jasmine.any(Function));
      expect(cdb.geo.TileLayer).toEqual(jasmine.any(Function));
      expect(cdb.geo.GMapsBaseLayer).toEqual(jasmine.any(Function));
      expect(cdb.geo.WMSLayer).toEqual(jasmine.any(Function));
      expect(cdb.geo.PlainLayer).toEqual(jasmine.any(Function));
      expect(cdb.geo.TorqueLayer).toEqual(jasmine.any(Function));
      expect(cdb.geo.CartoDBLayer).toEqual(jasmine.any(Function));
      expect(cdb.geo.CartoDBNamedMapLayer).toEqual(jasmine.any(Function));
      expect(cdb.geo.Layers).toEqual(jasmine.any(Function));
      expect(cdb.geo.CartoDBGroupLayer).toEqual(jasmine.any(Function));
      expect(cdb.geo.Map).toEqual(jasmine.any(Function));
      expect(cdb.geo.MapView).toEqual(jasmine.any(Function));
    });

    it('should have a cdb.geo.ui object', function() {
      expect(cdb.geo.ui.Text).toEqual(jasmine.any(Function));
      expect(cdb.geo.ui.Annotation).toEqual(jasmine.any(Function));
      expect(cdb.geo.ui.Image).toEqual(jasmine.any(Function));
      expect(cdb.geo.ui.Share).toEqual(jasmine.any(Function));
      expect(cdb.geo.ui.Zoom).toEqual(jasmine.any(Function));
      expect(cdb.geo.ui.ZoomInfo).toEqual(jasmine.any(Function));
      expect(cdb.geo.ui.Legend).toEqual(jasmine.any(Function));

      expect(cdb.geo.ui.InfowindowModel).toEqual(jasmine.any(Function));
      expect(cdb.geo.ui.Infowindow).toEqual(jasmine.any(Function));

      expect(cdb.geo.ui.SwitcherItemModel).toEqual(jasmine.any(Function));
      expect(cdb.geo.ui.SwitcherItems).toEqual(jasmine.any(Function));
      expect(cdb.geo.ui.SwitcherItem).toEqual(jasmine.any(Function));
      expect(cdb.geo.ui.Switcher).toEqual(jasmine.any(Function));

      expect(cdb.geo.ui.SlidesControllerItem).toEqual(jasmine.any(Function));
      expect(cdb.geo.ui.SlidesController).toEqual(jasmine.any(Function));
      expect(cdb.geo.ui.Header).toEqual(jasmine.any(Function));
    });

    it('should have a core.vis', function() {
      expect(cdb.vis).toBeDefined();
      expect(cdb.vis.Loader).toBeDefined();
    });
  });
};
