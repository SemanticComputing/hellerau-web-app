import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { sortBy } from 'lodash'

const styles = theme => ({
  root: {
    marginTop: theme.spacing(1)
  }
})

const ManuscriptList = props => {
  const { classes, manuscripts } = props
  let items = ''
  const isArray = Array.isArray(manuscripts)
  if (isArray) {
    const sorted = sortBy(manuscripts, ['prefLabel'])
    items = sorted.map(m =>
      <li key={m.id}>
        <Typography>
          {m.prefLabel}
        </Typography>
      </li>)
  }
  return (
    <div className={classes.root}>
      {isArray &&
        <>
          <Typography>People:</Typography>
          <ul>
            {items}
          </ul>
        </>}
      {!isArray &&
        <>
          <Typography>People:</Typography>
          <Typography>
            {manuscripts.prefLabel}
          </Typography>
        </>}
    </div>
  )
}

ManuscriptList.propTypes = {
  classes: PropTypes.object.isRequired,
  manuscripts: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default withStyles(styles)(ManuscriptList)
