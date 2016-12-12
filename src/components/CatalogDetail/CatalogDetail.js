import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import SearchInput from '../SearchInput/SearchInput'
import ContentLoader from '../Loader/ContentLoader'
import CatalogSection from '../Section/CatalogSection/CatalogSection'
import StatisticsSection from '../Section/StatisticsSection/StatisticsSection'
import OrganizationsSection from '../Section/OrganizationsSection/OrganizationsSection'
import HarvestsSection from '../Section/HarvestsSection/HarvestsSection'
import { fetchCatalog, fetchMetrics } from '../../fetch/fetch'
import { waitForDataAndSetState, cancelAllPromises } from '../../helpers/components'
import { theme } from '../../tools'

const styles = {
  section: {
    paddingTop: '2em',
    paddingBottom: '2em',
    backgroundColor: 'white',
    padding: '2em',
    marginBottom: '2em',
    boxShadow: theme.boxShadowZ1,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  h1: {
    fontSize: '1.4rem',
    color: theme.darkblue,
    marginBottom: '1em',
  },
  h2: {
    fontSize: '1.2em',
    fontWeight: 400,
    marginBottom: '1em',
  },
  catalogDetail: {
    padding: 40,
    display: 'block',
  },
  loader: {
    textAlign: 'center',
    marginTop: '5em',
  },
}

class CatalogDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {errors: []}
  }

  componentWillMount() {
    return Promise.all([
      this.updateCatalog(),
      this.updateMetrics(),
    ])
  }

  componentWillUnmount() {
    return cancelAllPromises(this)
  }

  updateMetrics() {
    return waitForDataAndSetState(fetchMetrics(this.props.params.catalogId), this, 'metrics');
  }

  updateCatalog() {
    return waitForDataAndSetState(fetchCatalog(this.props.params.catalogId), this, 'catalog');
  }

  userSearch(path, textInput) {
    browserHistory.push({ pathname: '/datasets', query: {q: textInput, catalog: this.state.catalog.name} })
  }

  render() {
    const catalog = this.state.catalog
    const metrics = this.state.metrics

    if (!catalog || !metrics) return <div style={styles.loader}><ContentLoader /></div>

    return (
      <div style={styles.catalogDetail} id="catalog-detail">
        <div style={{...styles.section, padding: '0'}}>
          <CatalogSection catalog={catalog} />
          <StatisticsSection metrics={metrics} />
        </div>

        <div style={styles.section}><OrganizationsSection metrics={metrics} catalog={catalog}/></div>
        <div style={styles.section}><HarvestsSection catalog={catalog} /></div>

        <div style={styles.section}>
          <h2 style={styles.h2}>Rechercher dans les jeux de données du catalogue</h2>
          <SearchInput ref="searchInput" handleTextChange={(textInput) => this.userSearch('datasets', textInput)} searchButton={true}/>
        </div>
      </div>
    )
  }
}

export default CatalogDetail