import React from 'react'
import { Link } from 'react-router'
import OrganizationMetrics from './OrganizationMetrics'
import OrganizationProducers from './OrganizationProducers'
import SourceCatalogs from '../Catalog/SourceCatalogs'
import styles from './OrganizationCardSection.css'

const OrganizationCardSection = ({ organization, metrics }) => {
  return (
    <div className={styles.content}>
      <div className={styles.section}>
        <h4>Jeux de données</h4>
        <OrganizationMetrics metrics={metrics} organizationId={organization._id} />
      </div>

      <div className={styles.section}>
        <h4>Producteurs source</h4>
        <OrganizationProducers organizationId={organization._id} producers={organization.producers} />
      </div>

      <div className={styles.section}>
        <h4>Catalogues source</h4>
        <SourceCatalogs organizationId={organization._id} sourceCatalogs={organization.sourceCatalogs} />
      </div>

      <div className={styles.previousPage}>
        <Link to={'/publication'}><i className="arrow left icon"></i> Retour aux organisations</Link>
      </div>
    </div>
  )
}

export default OrganizationCardSection
