/* This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js */

// TODO: to accept 'props.params' a function returning a function will need to be constructed.
export default function fetchComponentData(components) {
  const needs = components.reduce((prev, current) => {
    return (current.need || [])
      .concat((current.WrappedComponent && (current.WrappedComponent.need !== current.need)
          ? current.WrappedComponent.need
          : [])
        || [])
      .concat(prev);
  }, []);

  return Promise.all(needs);
}
