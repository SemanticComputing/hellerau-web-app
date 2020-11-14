import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  legend: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1)
  },
  red: {
    color: 'rgba(255,0,0,255)'
  },
  blue: {
    color: 'rgba(0,0,255,255)'
  }
})

const DeckArcLayerLegend = props => {
  const { classes, title, fromText, toText } = props
  return (
    <Card className={classes.legend}>
      <CardContent>
        <Typography variant='h6' gutterBottom>{title}</Typography>
        <Typography className={classes.blue} variant='body2' gutterBottom>
          {fromText}
        </Typography>
        <Typography className={classes.red} variant='body2' gutterBottom>
          {toText}
        </Typography>
      </CardContent>
    </Card>
  )
}

DeckArcLayerLegend.propTypes = {
  title: PropTypes.string.isRequired,
  fromText: PropTypes.string.isRequired,
  toText: PropTypes.string.isRequired
}

export default withStyles(styles)(DeckArcLayerLegend)
