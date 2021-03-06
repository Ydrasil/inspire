import React from 'react'
import { Link } from 'react-router'
import LastHarvestStatus from '../LastHarvestStatus/LastHarvestStatus'
import Counter from '../Statistics/Counter/Counter'
import Percent from '../Statistics/Percent/Percent'
import ObsoleteWarning from './ObsoleteWarning'
import { get } from 'lodash'
import { container, link, paper, title } from './CatalogPreview.css'

const CatalogPreview = ({ catalog }) => {
  let metrics = catalog.metrics
  let openness = get(metrics, 'datasets.partitions.openness.yes', 0)
  let download = get(metrics, 'datasets.partitions.download.yes', 0)

  const metricsPreview = !metrics ? <div>Aucun donnée disponible</div> :
          <div className={container}>
            <Percent value={openness} total={metrics.datasets.totalCount} size="small" label="Données ouvertes" icon="unlock alternate icon" />
            <Percent value={download} total={metrics.datasets.totalCount} size="small" label="Téléchargeable" icon="download" />
            <Counter value={metrics.records.totalCount} size="small" label="Enregistrements" />
          </div>

  return (
    <Link to={`/catalogs/${catalog._id}`} className={link}>
      <div className={paper}>
        <div className={title}>{catalog.name}</div>
        <LastHarvestStatus harvest={catalog.service.sync}/>
        <ObsoleteWarning catalog={catalog} />
        {metricsPreview}
      </div>
    </Link>
  )
}

export default CatalogPreview
