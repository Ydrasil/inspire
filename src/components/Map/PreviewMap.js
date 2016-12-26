import React, { Component } from 'react'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import ContentLoader from '../Loader/ContentLoader'
import styles from './PreviewMap.css'

const MAP = {
  latitude: 47,
  longitude: 1,
  zoom: 5.5,
  osmUrl: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
  osmAttribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}

class PreviewMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: MAP.latitude,
      lng: MAP.longitude,
      zoom: MAP.zoom,
    }
  }

  componentDidUpdate() {
    const { vectors, map } = this.refs

    if (vectors && map) {
      const bounds = vectors.leafletElement.getBounds()
      map.leafletElement.fitBounds(bounds)
    }
  }

  render() {
    const { geojson, loading, errors, distribution } = this.props
    const position = [this.state.lat, this.state.lng]

    const err = (
      <div className={styles.errors}>
        <strong>Une erreur est survenue lors du chargement de {distribution && (distribution.typeName || distribution.layer)}</strong>
        <br/>{errors.map(error => error)}
      </div>
    )

    const loader = (
      <div className={styles.load}>
        <ContentLoader className={styles.loader} />
      </div>
    )

    return (
      <div className={styles.container}>
        {errors.length ? err : null}
        {loading && !errors.length ? loader : null}
        <Map ref="map" className={styles.map} center={position} zoom={this.state.zoom} >
          <TileLayer attribution={MAP.osmAttribution} url={MAP.osmUrl} />
          {geojson && !errors.length ? <GeoJSON ref="vectors" data={geojson} /> : null}
        </Map>
      </div>
    )
  }
}

export default PreviewMap