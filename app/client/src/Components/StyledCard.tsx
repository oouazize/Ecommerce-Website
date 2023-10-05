
export default function StyledCard({image}: {image: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="317" height="380" viewBox="0 0 317 380" fill="none" style={{ position: 'relative' }}>
        <path d="M1 379.5V1H177.5C207.1 1 214.5 24 214.5 56.5C209.167 72.6667 211.713 112.837 261.5 105C315.5 96.5 318.5 127.667 315.5 139V379.5H1Z" fill="url(#pattern0)" stroke="black"/>
        <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_14_203" transform="matrix(0.00238187 0 0 0.00198413 -0.401538 0)"/>
            </pattern>
            <image id="image0_14_203" width="757" height="625" xlinkHref={image} />
        </defs>
    </svg>
  )
}
