type Props = {
    value: number
}

const Panel = ({value, ...props}: Props) => (
    <div {...props} id="panel" className="panel-converter">
      <table>
          <tbody>
            <tr>
                <td><strong>wei</strong></td>
                <td>1 wei</td>
                <td>{value}</td>
            </tr>
            <tr>
                <td><strong>Kwei (babbage)</strong></td>
                <td>1e3 wei</td>
                <td>{value ** 3}</td>
                {/* 1,000 */}
            </tr>
            <tr>
                <td><strong>Mwei (lovelace)</strong></td>
                <td>1e6 wei</td>
                <td>{value ** 6}</td>
                {/* 1,000,000 */}
            </tr>
            <tr>
                <td><strong>Gwei (shannon)</strong></td>
                <td>1e9 wei</td>
                <td>{value ** 9}</td>
                {/* 1,000,000,000 */}
            </tr>
            <tr>
                <td><strong>microether (szabo)</strong></td>
                <td>1e12 wei</td>
                <td>{value ** 12}</td>
                {/* 1,000,000,000,000 */}
            </tr>
            <tr>
                <td><strong>milliether (finney)</strong></td>
                <td>1e15 wei</td>
                <td>{value ** 15}</td>
                {/* 1,000,000,000,000,000 */}
            </tr>
            <tr>
                <td><strong>ether</strong></td>
                <td>1e18 wei</td>
                <td>{value ** 18}</td>
                {/* 1,000,000,000,000,000,000 */}
            </tr>
        </tbody>
      </table>
    </div>
  )

  export default Panel