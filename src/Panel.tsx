type Props = {
    value: number
}

const Panel = ({value, ...props}: Props) => (
    <div {...props} id="panel" className="panel-converter">
      <table>
          <tbody>
            <tr>
                <td><strong>wei</strong></td>
                <td>{10**9 * value}</td>
            </tr>
            <tr>
                <td><strong>Kwei (babbage)</strong></td>
                <td>{10**6 * value}</td>
            </tr>
            <tr>
                <td><strong>Mwei (lovelace)</strong></td>
                <td>{10**3 * value}</td>
            </tr>
            <tr>
                <td><strong>Gwei (shannon)</strong></td>
                <td>{value}</td>
            </tr>
            <tr>
                <td><strong>microether (szabo)</strong></td>
                <td>{value * 0.001}</td>
            </tr>
            <tr>
                <td><strong>milliether (finney)</strong></td>
                <td>{value * 0.000001}</td>
            </tr>
            <tr>
                <td><strong>ether</strong></td>
                <td>{value * 0.00000001}</td>
            </tr>
        </tbody>
      </table>
    </div>
  )

  export default Panel