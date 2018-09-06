import React from "react"
import styled from 'styled-components'



const Wrapper = styled.h1`
  font-size: ${props => (props.small ? '.25em' : '1.0em')};  
  font-weight: 100;
  text-align: center;
  margin: 0 0 3rem 0;
  margin: ${props => (props.small ? '1rem 0 4rem 0' : '0 0 3rem 0')};
  line-height: 1.2;
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }  
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}
  #files {
      font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 90%;
  }

  #files td, #files th {
      border: 10px solid #ddd;
      padding: 8px;
  }

  #files tr:nth-child(even){background-color: #f2f2f2;}

  #files tr:hover {background-color: #ddd;}

  #files th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: center;
      background-color: #4CAF50;
      color: white;
}
`

export default ({ data }) => {
  console.log(data)
  return (
      <div>
        <Wrapper>
          <h2>Files Statically Generated by Prototype</h2>
          <table id="files">
            <thead>
              <tr>
                <th>dir</th>
                <th>modified</th>
                <th>name</th>
                <th>size</th>
              </tr>
            </thead>
            <tbody>
              {data.allFile.edges.map(({ node }, index) =>
                <tr key={index}>
                  <td>
                    {node.dir}
                  </td>
                  <td>
                    {node.modifiedTime}
                  </td>
                  <td>
                    {node.name}
                  </td>
                  <td>
                    {node.size}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Wrapper>
      </div>
    )
}

export const query = graphql`
  query MyFilesQuery {
     allFile {
       edges {
         node {
           modifiedTime
           size
           dir
           name
         }
       }
    }
}`
