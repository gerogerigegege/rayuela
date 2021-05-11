// https://www.joshwcomeau.com/gatsby/the-worlds-sneakiest-route-change/

export const shouldUpdateScroll = ({ routerProps }) => {
  const { disableScrollUpdate } = routerProps.location.state
  return !disableScrollUpdate
}
