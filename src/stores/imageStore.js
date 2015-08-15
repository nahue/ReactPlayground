import Reflux from 'reflux';
import $ from 'jquery';
import ImageActions from '../actions/imageActions';

let ImageStore = Reflux.createStore({
    url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json',
    listenables: [ImageActions],
    imagelist: [],
    'fetchList': function() {
        let tags = ['animals','nature','food','travel','cars','sport'];
        let randomTag = tags[Math.floor(Math.random()*tags.length)];
        let id = 0;
        $.ajax({
            url: this.url + `&tag=${randomTag}`,
            dataType: 'jsonp',
            jsonpCallback: 'jsonFlickrFeed',
            cache: false,
            context: this,
            success: function(data) {
                data.items.map((images) => {
                    images.id = id;
                    id++;
                });
                this.imagelist = data.items;
                this.trigger(this.imagelist);
            }
        });
    }
});

export default ImageStore;
