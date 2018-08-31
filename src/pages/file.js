import React from "react"

export default ({ data }) => {
  console.log(data)
  return (
      <div>
        <h1>My Sites Files</h1>
        <table>
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
