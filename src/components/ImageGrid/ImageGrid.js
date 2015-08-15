import React from 'react';
import Reflux from 'reflux';
import ImageStore from '../../stores/imageStore';
import ImageActions from '../../actions/imageActions';
import reactMixin from 'react-mixin';
import './ImageGrid.scss';

export default class ImageGrid extends React.Component {
    constructor() {
        super();
    }

    toggleImageRotation(imageRotation) {
        if (imageRotation == true) {
            this.state.imageRotationActive = setInterval(() => {
                ImageActions.fetchList();
            }, 5000);
        } else {
            clearInterval(this.state.imageRotationActive);
        }

    }

    componentDidMount() {
        //ImageActions.fetchList();
        //this.state.imageRotationActive = true;
        this.toggleImageRotation(true);
    }

    componentWillUnmount() {
        this.toggleImageRotation(false);
    }

    render() {
        if (this.state.imagestore) {
            return <div className='mdl-grid'>
              {
                  this.state.imagestore.map((image) => {
                      return <div key={image.id} className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--6-col-phone image">
                        <div className="mdl-card__media" style={{backgroundImage: 'url(' + image.media.m + ')' }}>
                        </div>
                        <div className="mdl-card__supporting-text meta mdl-color-text--grey-600">
                          <div>
                            <strong>{image.title}</strong>
                          </div>
                        </div>
                      </div>;
                  })
              }
              </div>;
        } else {
            return <p>No hay imagenes disponibles</p>;
        }
    }
}
reactMixin.onClass(ImageGrid, Reflux.connect(ImageStore, 'imagestore'));

/*
*/
