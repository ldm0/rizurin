!function(A){var g={};function B(Q){if(g[Q])return g[Q].exports;var I=g[Q]={i:Q,l:!1,exports:{}};return A[Q].call(I.exports,I,I.exports,B),I.l=!0,I.exports}B.m=A,B.c=g,B.d=function(A,g,Q){B.o(A,g)||Object.defineProperty(A,g,{enumerable:!0,get:Q})},B.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},B.t=function(A,g){if(1&g&&(A=B(A)),8&g)return A;if(4&g&&"object"==typeof A&&A&&A.__esModule)return A;var Q=Object.create(null);if(B.r(Q),Object.defineProperty(Q,"default",{enumerable:!0,value:A}),2&g&&"string"!=typeof A)for(var I in A)B.d(Q,I,function(g){return A[g]}.bind(null,I));return Q},B.n=function(A){var g=A&&A.__esModule?function(){return A.default}:function(){return A};return B.d(g,"a",g),g},B.o=function(A,g){return Object.prototype.hasOwnProperty.call(A,g)},B.p="/dist/",B(B.s=13)}([function(A,g,B){"use strict";function Q(A){for(var B in A)g.hasOwnProperty(B)||(g[B]=A[B])}Object.defineProperty(g,"__esModule",{value:!0}),Q(B(14)),Q(B(15))},function(A,g,B){"use strict";function Q(A){for(var B in A)g.hasOwnProperty(B)||(g[B]=A[B])}Object.defineProperty(g,"__esModule",{value:!0}),Q(B(11)),Q(B(10)),Q(B(12)),Q(B(17)),Q(B(10)),Q(B(18))},function(A,g,B){"use strict";B.r(g),B.d(g,"addExtensionsToContext",(function(){return CQ})),B.d(g,"attributes",(function(){return O})),B.d(g,"bindFramebufferInfo",(function(){return vB})),B.d(g,"bindTransformFeedbackInfo",(function(){return dB})),B.d(g,"bindUniformBlock",(function(){return KB})),B.d(g,"canFilter",(function(){return Fg})),B.d(g,"canGenerateMipmap",(function(){return ig})),B.d(g,"createAttribsFromArrays",(function(){return j})),B.d(g,"createAttributeSetters",(function(){return VB})),B.d(g,"createBufferFromArray",(function(){return v})),B.d(g,"createBufferFromTypedArray",(function(){return m})),B.d(g,"createBufferInfoFromArrays",(function(){return z})),B.d(g,"createBuffersFromArrays",(function(){return q})),B.d(g,"createFramebufferInfo",(function(){return TB})),B.d(g,"createProgram",(function(){return MB})),B.d(g,"createProgramFromScripts",(function(){return ZB})),B.d(g,"createProgramFromSources",(function(){return NB})),B.d(g,"createProgramInfo",(function(){return XB})),B.d(g,"createProgramInfoFromProgram",(function(){return eB})),B.d(g,"createSampler",(function(){return kg})),B.d(g,"createSamplers",(function(){return Jg})),B.d(g,"createTexture",(function(){return xg})),B.d(g,"createTextures",(function(){return fg})),B.d(g,"createTransformFeedback",(function(){return UB})),B.d(g,"createTransformFeedbackInfo",(function(){return sB})),B.d(g,"createUniformBlockInfo",(function(){return bB})),B.d(g,"createUniformBlockInfoFromProgram",(function(){return JB})),B.d(g,"createUniformBlockSpecFromProgram",(function(){return lB})),B.d(g,"createUniformSetters",(function(){return cB})),B.d(g,"createVAOAndSetAttributes",(function(){return PB})),B.d(g,"createVAOFromBufferInfo",(function(){return _B})),B.d(g,"createVertexArrayInfo",(function(){return OB})),B.d(g,"draw",(function(){return uB})),B.d(g,"drawBufferInfo",(function(){return pB})),B.d(g,"drawObjectList",(function(){return rB})),B.d(g,"framebuffers",(function(){return qB})),B.d(g,"getArray_",(function(){return X})),B.d(g,"getBytesPerElementForInternalFormat",(function(){return Gg})),B.d(g,"getContext",(function(){return oQ})),B.d(g,"getFormatAndTypeForInternalFormat",(function(){return Rg})),B.d(g,"getGLTypeForTypedArray",(function(){return s})),B.d(g,"getGLTypeForTypedArrayType",(function(){return d})),B.d(g,"getNumComponentsForFormat",(function(){return wg})),B.d(g,"getNumComponents_",(function(){return u})),B.d(g,"getTypedArrayTypeForGLType",(function(){return U})),B.d(g,"getWebGLContext",(function(){return EQ})),B.d(g,"glEnumToString",(function(){return PA})),B.d(g,"isArrayBuffer",(function(){return l})),B.d(g,"isWebGL1",(function(){return OA})),B.d(g,"isWebGL2",(function(){return qA})),B.d(g,"loadTextureFromUrl",(function(){return Xg})),B.d(g,"m4",(function(){return y})),B.d(g,"primitives",(function(){return vA})),B.d(g,"programs",(function(){return LB})),B.d(g,"resizeCanvasToDisplaySize",(function(){return GQ})),B.d(g,"resizeFramebufferInfo",(function(){return zB})),B.d(g,"resizeTexture",(function(){return jg})),B.d(g,"setAttribInfoBufferFromArray",(function(){return f})),B.d(g,"setAttributeDefaults_",(function(){return V})),B.d(g,"setAttributePrefix",(function(){return H})),B.d(g,"setAttributes",(function(){return SB})),B.d(g,"setBlockUniforms",(function(){return WB})),B.d(g,"setBuffersAndAttributes",(function(){return mB})),B.d(g,"setDefaultTextureColor",(function(){return Mg})),B.d(g,"setDefaults",(function(){return gQ})),B.d(g,"setEmptyTexture",(function(){return ug})),B.d(g,"setSamplerParameters",(function(){return lg})),B.d(g,"setTextureDefaults_",(function(){return ag})),B.d(g,"setTextureFilteringForSize",(function(){return bg})),B.d(g,"setTextureFromArray",(function(){return rg})),B.d(g,"setTextureFromElement",(function(){return ng})),B.d(g,"setTextureParameters",(function(){return Ug})),B.d(g,"setUniformBlock",(function(){return tB})),B.d(g,"setUniforms",(function(){return nB})),B.d(g,"setUniformsAndBindTextures",(function(){return HB})),B.d(g,"textures",(function(){return Tg})),B.d(g,"typedarrays",(function(){return k})),B.d(g,"utils",(function(){return _A})),B.d(g,"v3",(function(){return D})),B.d(g,"vertexArrays",(function(){return $B}));
/* @license twgl.js 4.14.1 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */